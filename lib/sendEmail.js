import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email, verificationCode) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const verificationLink = `${process.env.NEXTAUTH_URL}/verify-email?token=${verificationCode}`;
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: 'Verify your email',
    text: `Verify your email by clicking this link: ${verificationLink}`,
    html: `<p>Your verification code is: <b>${verificationCode}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
};