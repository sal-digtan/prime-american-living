import dbConnect from '../../../../lib/db';
import User from '../../../../lib/model/User';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '../../../../lib/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const { fname, lname, email, password, confirm_password, userType } = await req.json();

    if (!fname || !lname || !email || !password || !confirm_password || !userType) {
        return NextResponse.json({ message: 'Please fill out all fields' }, { status: 400 });
    }

    if (userType !== 'Customer' && userType !== 'Property Agent') {
        return NextResponse.json({ message: 'Invalid user type' }, { status: 400 });
    }

    if (password !== confirm_password) {
        return NextResponse.json({ message: 'Passwords do not match' }, { status: 400 });
    }

    try {
        await dbConnect();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
        }

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            fname, lname, email, password: hashedPassword, userType, verificationCode,
            isVerified: false,
        });

        // Send verification email
        await sendVerificationEmail(user.email, verificationCode);

        let redirectUrl;
        if (userType === 'Customer') {
            redirectUrl = '/dashboard';
        } else if (userType === 'Property Agent') {
            redirectUrl = '/dashboard';
        }

        return NextResponse.json({ message: 'User created successfully', redirectUrl }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}