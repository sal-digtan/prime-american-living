import User from '../../../../lib/model/User';
import dbConnect from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function PUT(req) {
    const { email, verificationCode } = await req.json();

    try {
        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        console.log('Verification Code from DB:', user.verificationCode);
        console.log('Verification Code from Request:', verificationCode);

        if (user.verificationCode !== verificationCode) {
            return NextResponse.json({ message: 'Invalid verification code' }, { status: 400 });
        }

        user.isVerified = true;
        await user.save();

        return NextResponse.json({ message: 'Email verified successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}


