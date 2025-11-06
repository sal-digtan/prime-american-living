import dbConnect from '../../../../lib/db';
import User from '../../../../lib/model/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
    await dbConnect();

    const { token, password } = await req.json();

    console.log(token, password, "from frontend token & password");

    if (!token || !password) {
        return NextResponse.json({ message: 'Token and password are required' }, { status: 400 });
    }

    try {
        const user = await User.findOne({
            resetToken: token,
            resetTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        // user.password = hashedPassword;
        // user.resetToken = undefined;
        // user.resetTokenExpiry = undefined;
        // await user.save();
        await User.findByIdAndUpdate(user._id, {
            password: hashedPassword,
            $unset: { resetToken: "", resetTokenExpiry: "" },
        });

        return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}