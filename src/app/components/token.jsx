'use client'

import { useParams } from 'next/navigation';
import { useEffect, useContext } from 'react';
import { ResetPasswordTokenContext } from '@/app/context/ResetPasswordTokenContext';


const PasswordTokenReset = () => {

    const params = useParams();
    const token = params.token;

    const { ResetPasswordToken, setResetPasswordToken } = useContext(ResetPasswordTokenContext)

    console.log(token, 'Token from URL');


    useEffect(() => {
        setResetPasswordToken(token)
    }, [token])

    console.log(ResetPasswordToken, "token to sent to singin");

    return (
        <div>{token}</div>
    )
}

export default PasswordTokenReset