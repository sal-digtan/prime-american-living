'use client';

import React, { useState, useContext } from 'react'
import signinStyles from '@/app/components/signin.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { signIn, useSession } from "next-auth/react";
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
// import { ResetPasswordTokenContext } from '@/app/context/ResetPasswordTokenContext';

const signin = () => {

    const sliderData = [
        {
            id: 1,
            title: 'Get Started with Ease',
            text: 'Follow simple steps to set up your account and explore properties tailored to your needs. Your dream home journey begins here.'
        },
        {
            id: 2,
            title: 'Connect & Secure Easily',
            text: 'Schedule visits, connect with agents, and move closer to sealing the deal with just a few clicks.'
        },
        {
            id: 3,
            title: 'Discover Your Perfect Match',
            text: 'Browse a wide range of listings and find homes that fit your lifestyle, location, and budget.'
        },
    ]

    const settings = {
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const formFields = [
        {
            id: 1,
            name: 'email',
            placeholder: 'Enter Email',
            type: 'email',
            label: 'Email address'
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Password',
            type: 'password',
            label: ''
        },
    ]

    const [showSignIn, setShowSignIn] = useState(true)
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data: session, status } = useSession();

    // if (session) {
    //     return <div>You're already signed in!</div>;
    // }


    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if (result?.url) {
            router.replace('/dashboard');
        }
    };

    const [forgetEmail, setForgetEmail] = useState('')
    const [forgetPassword, setForgetPassword] = useState('')

    // const { ResetPasswordToken } = useContext(ResetPasswordTokenContext);

    const [token, setToken] = useState('')

    const handleResetPasword = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        try {
            console.log('Email:', forgetEmail);
            const response = await axios.post('/api/forget-password', {
                email: forgetEmail
            })
            // const token = response.data.token;
            // router.push(`/reset-password/${token}`)
            setToken(response.data.token);
            console.log(token, 'token from backend');
            // Call handleUpdatePassword with the token
            // handleUpdatePassword(token);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    // const params = useParams();
    // const token = params.token;



    // console.log(ResetPasswordToken, "token from token.js");

    const handleUpdatePassword = async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        // console.log(token, 'Token from frontend');
        try {
            // if (ResetPasswordToken === '' || ResetPasswordToken === undefined || ResetPasswordToken === null) {
            //     return
            // } else {
            //     window.open(`/reset-password/${ResetPasswordToken}`, '_blank');
            // }
            const response = await axios.post('/api/reset-password', {
                token: token,
                password: forgetPassword
            })
            // router.push(`/reset-password/${token}`)
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className={signinStyles.container}>
            {session !== null && status === 'authenticated' ? <div>You are already sigined in!</div> :
                <Container fluid className='ps-lg-4'>
                    <Row>
                        <Col lg={6}>
                            {showSignIn &&
                                <div className={signinStyles.form_container}>
                                    <div className='mb-4'>
                                        <h2 className={`${signinStyles.title} mb-4`}>Sign in</h2>
                                        <p className={signinStyles.text}>New user? <Link href='/signup' className={signinStyles.signin_link}>Create an acount</Link></p>
                                    </div>
                                    <Form>
                                        <Row>
                                            {formFields.map((item, index) =>
                                                <Col lg={12} key={index}>
                                                    <Form.Group className="mb-3" controlId={item.name}>
                                                        <Form.Label className={signinStyles.form_label}>{item.label}</Form.Label>
                                                        <Form.Control onChange={(e) => item.name === 'email' ? setEmail(e.target.value) : setPassword(e.target.value)} value={item.name === 'email' ? email : password} type={item.type} placeholder={item.placeholder} className={`${item.id === 2 ? signinStyles.password_input : signinStyles.email_input} border-0 border-bottom`} />
                                                    </Form.Group>
                                                </Col>
                                            )}
                                        </Row>
                                    </Form>
                                    <div className='py-4 d-flex align-items-center justify-content-between'>
                                        <div>
                                            <span><a href="#" onClick={() => { setShowSignIn(false); setShowForgotPassword(true) }} className={signinStyles.forgot_link}>Forgot Password?</a></span>
                                        </div>
                                        <div>
                                            <Button variant='primary' onClick={handleSubmit} className={signinStyles.form_btn}>Sign In</Button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {showForgotPassword &&
                                <div className={signinStyles.form_container}>
                                    <div className='mb-4'>
                                        <h2 className={`${signinStyles.title} mb-4`}>Forgot password</h2>
                                        <p className={signinStyles.text}>Enter your email for the verification process, we will send 6 digits code to your email.</p>
                                    </div>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group className="mb-3" controlId='email'>
                                                    <Form.Label className={signinStyles.form_label}>Email address</Form.Label>
                                                    <Form.Control type='email' placeholder='Enter Email' className={`${signinStyles.email_input} border-0 border-bottom`} onChange={(e) => setForgetEmail(e.target.value)} value={forgetEmail} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className='py-4'>
                                        <Button variant='primary' onClick={() => { setShowNewPassword(true); setShowForgotPassword(false); handleResetPasword() }} className={signinStyles.form_btn}>Continue</Button>
                                    </div>
                                </div>
                            }
                            {showNewPassword &&
                                <div className={signinStyles.form_container}>
                                    <div className='mb-4'>
                                        <h2 className={`${signinStyles.title} mb-4`}>New Password</h2>
                                        <p className={signinStyles.text}>Set the new password for your account so you can login and access all features</p>
                                    </div>
                                    <Form>
                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group className="mb-3" controlId='password'>
                                                    <Form.Label className={signinStyles.form_label}>Enter new password</Form.Label>
                                                    <Form.Control type='password' placeholder='Enter Password' className={`${signinStyles.password_input} border-0 border-bottom`} onChange={(e) => setForgetPassword(e.target.value)} value={forgetPassword} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId='confirm-password'>
                                                    <Form.Control type='password' placeholder='Confirm password' className={`${signinStyles.password_input} border-0 border-bottom`} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className='py-4'>
                                        <Button variant='primary' onClick={() => { setShowNewPassword(false); setShowSuccess(true); handleUpdatePassword() }} className={signinStyles.form_btn}>Update Password</Button>
                                    </div>
                                </div>
                            }
                            {showSuccess &&
                                <div className={signinStyles.form_container}>
                                    <div className='mb-4 text-center'>
                                        <svg width="165" height="165" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M120.937 53.4869C123.229 55.7696 123.237 59.4782 120.954 61.7701L71.6015 111.323C69.3188 113.615 65.6104 113.623 63.3184 111.34L45.3198 93.4163C43.0277 91.1337 43.02 87.4251 45.3026 85.133C47.5852 82.8409 51.2937 82.8332 53.5858 85.1158L67.4345 98.907L112.654 53.5037C114.937 51.2117 118.645 51.2042 120.937 53.4869Z" fill="#4178BA" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M82.5004 17.0556C51.4532 17.0556 25.4068 38.735 18.7208 67.7774L18.7208 67.7775C17.6324 72.5048 17.0561 77.4322 17.0561 82.4999C17.0561 118.616 46.3839 147.944 82.5004 147.944C118.617 147.944 147.945 118.616 147.945 82.4999C147.945 46.3835 118.617 17.0556 82.5004 17.0556ZM7.3051 65.1493C15.1873 30.911 45.8718 5.34131 82.5004 5.34131C125.087 5.34131 159.659 39.9138 159.659 82.4999C159.659 125.086 125.087 159.659 82.5004 159.659C39.9143 159.659 5.3418 125.086 5.3418 82.4999C5.3418 76.5412 6.01976 70.7322 7.3051 65.1493Z" fill="#4178BA" fillOpacity="0.4" />
                                        </svg>
                                    </div>
                                    <div className='mb-4 text-center'>
                                        <h2 className={signinStyles.title}>Successfully</h2>
                                    </div>
                                    <div className='text-center'>
                                        <p className={signinStyles.text}>Your Password has been reset successfully</p>
                                    </div>
                                    <div className='py-4'>
                                        <Button variant='primary' onClick={() => { setShowSuccess(false); setShowSignIn(true) }} className={signinStyles.form_btn}>Sign In</Button>
                                    </div>
                                </div>
                            }
                        </Col>
                        <Col lg={6} className='pe-0'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {sliderData.map((item, index) =>
                                        <div key={index} className={`position-relative ${item.id === 1 ? signinStyles.slider_img1 : item.id === 2 ? signinStyles.slider_img2 : item.id === 3 ? signinStyles.slider_img3 : ''}`}>
                                            <div className={`${signinStyles.slider_text_container} position-absolute bottom-0 text-center`}>
                                                <h5 className={signinStyles.slider_title}>{item.title}</h5>
                                                <span>{item.text}</span>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
        </section>
    )
}

export default signin