'use client';

import { createContext, useState } from 'react';

export const ResetPasswordTokenContext = createContext();

export const ResetPasswordTokenProvider = ({ children }) => {
    const [ResetPasswordToken, setResetPasswordToken] = useState('');

    return (
        <ResetPasswordTokenContext.Provider value={{ ResetPasswordToken, setResetPasswordToken }}>
            {children}
        </ResetPasswordTokenContext.Provider>
    );
};