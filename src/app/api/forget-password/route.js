import dbConnect from '../../../../lib/db';
import User from '../../../../lib/model/User';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await dbConnect();

    const { email } = await req.json();

    console.log(email, "Email from Frontend");

    if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const token = crypto.randomBytes(32).toString('hex');
        user.resetToken = token;
        user.resetTokenExpiry = Date.now() + 3600000 + 1000; // 1 hour
        await user.save();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: user.email,
            subject: 'Password Reset Request',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      ${process.env.NEXTAUTH_URL}/reset-password/${token}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Password reset link sent to your email', token: token }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
