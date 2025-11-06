import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import dbConnect from '../../../../../lib/db';
import User from '../../../../../lib/model/User';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await dbConnect()
                try {
                    console.log("Credentials:", credentials);
                    const user = await User.findOne({ email: credentials.email })
                    console.log("User:", user);
                    if (!user) {
                        throw new Error("No user found with this email")
                    }

                    if (!user.isVerified) {
                        throw new Error("Please verify your account before login")
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if (isPasswordCorrect) {
                        const userData = {
                            id: user._id.toString(),
                            email: user.email,
                            fname: user.fname,
                            lname: user.lname,
                            isVerified: user.isVerified,
                        }
                        console.log("User Data:", userData);
                        return userData

                    } else {
                        throw new Error('Incorrect password')
                    }

                } catch (err) {
                    throw new Error(err)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isVerified = user.isVerified;
                token.fname = user.fname;
                token.lname = user.lname
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isVerified = token.isVerified;
                session.user.fname = token.fname;
                session.user.lname = token.lname;
            }
            return session
        }
    },
    pages: {
        signIn: '/signin'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}
