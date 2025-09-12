import React from 'react'
import benefits_bannerStyles from '@/app/components/benefits_banner.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const benefits_banner = () => {
    return (
        <section className={benefits_bannerStyles.benefits_bannerbg}>
            <Container fluid className={benefits_bannerStyles.benefits_banner_container}>
                <Row>
                    <Col lg={7}>
                        <div>
                            <p className={benefits_bannerStyles.benefits_banner_subtitle}>Renter Profile & Registration</p>
                            <h2 className={benefits_bannerStyles.benefits_banner_title}>Your Personal Property Dashboard Benefits:</h2>
                            <div>
                                <ul className='list-unstyled'>
                                    <li>
                                        <span className={benefits_bannerStyles.listitem}>
                                            <svg className='me-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3749 13.7516C20.6249 17.5016 17.7975 21.032 13.8289 21.8215C9.86018 22.6109 5.83286 20.7649 3.84031 17.243C1.84775 13.7212 2.33966 9.3184 5.06035 6.32317C7.78103 3.32792 12.3749 2.5016 16.1249 4.0016" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.625 12.2516L12.375 16.0016L21.375 6.25159" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Save your favorite listings
                                        </span>
                                    </li>
                                    <li>
                                        <span className={benefits_bannerStyles.listitem}>
                                            <svg className='me-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3749 13.7516C20.6249 17.5016 17.7975 21.032 13.8289 21.8215C9.86018 22.6109 5.83286 20.7649 3.84031 17.243C1.84775 13.7212 2.33966 9.3184 5.06035 6.32317C7.78103 3.32792 12.3749 2.5016 16.1249 4.0016" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.625 12.2516L12.375 16.0016L21.375 6.25159" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Get instant alerts on new properties
                                        </span>
                                    </li>
                                    <li>
                                        <span className={benefits_bannerStyles.listitem}>
                                            <svg className='me-2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.3749 13.7516C20.6249 17.5016 17.7975 21.032 13.8289 21.8215C9.86018 22.6109 5.83286 20.7649 3.84031 17.243C1.84775 13.7212 2.33966 9.3184 5.06035 6.32317C7.78103 3.32792 12.3749 2.5016 16.1249 4.0016" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.625 12.2516L12.375 16.0016L21.375 6.25159" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Track your inquiries & referral rewards
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-4'>
                                <Button variant="primary" className={benefits_bannerStyles.benefits_banner_btn}>Track Your Reward</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default benefits_banner