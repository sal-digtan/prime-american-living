import React from 'react'
import aboutstatsStyles from '@/app/components/about_stats.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import aboutStatsImg from '../../../public/about-stats-img.png';
import Button from 'react-bootstrap/Button';

const about_stats = () => {

    const statsData = [
        {
            id: 1,
            title: '78K',
            text: 'Satisfied Customers'
        },
        {
            id: 2,
            title: '10+',
            text: 'Years Experience'
        },
        {
            id: 3,
            title: '10K',
            text: 'Established Housings'
        }
    ]

    return (
        <section className={aboutstatsStyles.promo_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={6} className='mb-lg-0 mb-3'>
                        <div>
                            <Image src={aboutStatsImg} width='100%' height='100%' className='img-fluid' alt='promo-img' />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <p className={aboutstatsStyles.promo_subtitle}>ABOUT US</p>
                            <h2 className={aboutstatsStyles.promo_title}>About Prime American Living</h2>
                            <p className={`${aboutstatsStyles.promo_text} fw-normal`}>Welcome to Prime American Living, your trusted partner in finding the perfect home across America. With years of expertise and a passion for connecting people with their dream properties, we bring together modern technology, professional insight, and personalized services to simplify your real estate journey.</p>
                            <p className={`${aboutstatsStyles.promo_text} fw-normal`}>From first-time buyers to seasoned investors, we help every client with transparency, integrity, and care. Our mission is simple: to turn your housing dreams into lasting realities.</p>
                        </div>
                        <Row>
                            {statsData.map((item, index) =>
                                <Col lg={4} md={4} xs={6} key={index}>
                                    <div>
                                        <h5 className={aboutstatsStyles.promo_card_title}>{item.title}</h5>
                                        <p className={aboutstatsStyles.promo_text}>{item.text}</p>
                                    </div>
                                </Col>
                            )}
                            <div className='d-flex align-items-center mt-3 flex-lg-row flex-md-row flex-column'>
                                <div>
                                    <Button variant="danger" className={aboutstatsStyles.promo_btn}>Explore properties</Button>
                                </div>
                                <div className='d-flex align-items-center justify-content-center ms-lg-4 mt-lg-0 ms-md-4 mt-md-0 mt-3'>
                                    <span className={aboutstatsStyles.call_icon_container}>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.8172 12.9489C9.01722 11.9409 6.78522 8.9169 6.35322 7.0449C7.14522 5.8209 7.79322 6.3969 8.22522 5.1729C8.22522 5.1009 9.37722 -1.0911 4.98522 0.204903C-4.59078 3.0849 11.1772 24.0369 17.1532 16.3329C19.8892 12.8049 13.3372 11.7969 13.2652 11.7969C11.8972 11.8689 12.2572 12.6609 10.8172 12.9489Z" fill="white" />
                                        </svg>
                                    </span>
                                    <div className='ms-2'>
                                        <span className={`${aboutstatsStyles.call_title} d-block`}>Call Us Anytime</span>
                                        <span className={`${aboutstatsStyles.call_text} d-block`}>+00 123 456789</span>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default about_stats