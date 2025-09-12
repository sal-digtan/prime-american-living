'use client';

import React from 'react'
import earnbannerStyles from '@/app/components/earn_banner.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import bannerimg from '../../../public/earn-bannerimg.png';
import Button from 'react-bootstrap/Button';

const earn_banner = () => {
    return (
        <section className={earnbannerStyles.earn_banner_container}>
            <Container>
                <Row>
                    <Col>
                        <Card className={earnbannerStyles.earn_banner_card}>
                            <Card.Body>
                                <Row>
                                    <Col lg={7} md={6} className='order-2 order-md-1 order-lg-1'>
                                        <p className={earnbannerStyles.earn_banner_subtitle}>Renter Profile & Registration</p>
                                        <h3 className={earnbannerStyles.earn_banner_title}>Earn While You Help Others Find Home</h3>
                                        <p className={earnbannerStyles.earn_banner_text}>Refer a friend and get $100 when they rent through Prime American Living.</p>
                                        <div className='mt-4'>
                                            <Button variant="primary" className={earnbannerStyles.earn_banner_btn}>Track Your Reward</Button>
                                        </div>
                                    </Col>
                                    <Col lg={5} md={6} className='order-1 order-md-2 order-lg-2 mb-lg-0 mb-3'>
                                        <div className='text-lg-end text-center'>
                                            <Image src={bannerimg} width='100%' height='100%' alt='banner image' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default earn_banner