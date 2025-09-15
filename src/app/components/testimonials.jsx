'use client';

import React, { useRef } from 'react'
import testimonialsStyles from '@/app/components/testimonials.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import testimonialsImg from '../../../public/testimonials-img.png';
import clientImg from '../../../public/client.png';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';

const testimonials = () => {

    const testimonialsData = [
        {
            id: 1,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 2,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 3,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 4,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 5,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 6,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
        {
            id: 7,
            subtitle: 'Hear From Our',
            title: 'Our Happy Homeowners!',
            text: 'Odio morbi quis commodo odio aenean sed adipiscing diam. Sociis natoque penatibus et magnis dis parturient montes. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.',
            name: 'Hailey Mccray',
            city: 'Los angles',
            img: testimonialsImg,
            clientImg: clientImg
        },
    ]

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className={testimonialsStyles.testimonials_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col>
                        <div className='text-center mb-4'>
                            <p className={testimonialsStyles.testimonials_subtitle}>Testimonials</p>
                            <h2 className={testimonialsStyles.testimonials_title}>What Our Clients Say</h2>
                        </div>
                        <div className="slider-container position-relative">
                            <Slider ref={slider => {
                                sliderRef = slider;
                            }} {...settings}>
                                {testimonialsData.map((item, index) =>
                                    <div key={index}>
                                        <Card className={testimonialsStyles.slider_card}>
                                            <Row className='align-items-center'>
                                                <Col lg={8}>
                                                    <Card.Body>
                                                        <div className='mb-4'>
                                                            <p className={testimonialsStyles.slider_subtitle}>{item.subtitle}</p>
                                                            <h4 className={testimonialsStyles.slider_title}>{item.title}</h4>
                                                        </div>
                                                        <div>
                                                            <svg width="98" height="31" viewBox="0 0 98 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_1_1467" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="2" width="16" height="17">
                                                                    <g clipPath="url(#clip0_1_1467)">
                                                                        <g clipPath="url(#clip1_1_1467)">
                                                                            <path d="M12.157 13.6611L11.933 12.6371L12.733 11.9331L14.909 10.0451L15.741 9.30915C16.189 8.92515 16.061 8.57315 15.485 8.50915L13.469 8.38115L10.429 8.09315L9.21302 5.30915L8.41302 3.48515C8.18902 2.94115 7.80502 2.94115 7.58102 3.48515L6.78102 5.30915L5.56502 8.09315L2.52502 8.38115L0.541021 8.57315C-0.0349786 8.63715 -0.162979 8.98915 0.285021 9.37315L3.29302 11.9651L4.09302 12.6691L3.83702 13.6611L2.97302 17.5012C2.84502 18.0771 3.16502 18.3011 3.64502 17.9811L6.62102 16.2531L8.02902 15.4211L10.653 16.9571L12.381 17.9492C12.893 18.2372 13.181 18.0132 13.053 17.4692L12.605 15.5492L12.157 13.6611Z" fill="black" />
                                                                        </g>
                                                                    </g>
                                                                </mask>
                                                                <g mask="url(#mask0_1_1467)">
                                                                    <rect y="2.62109" width="16" height="16" fill="#F6C800" />
                                                                </g>
                                                                <mask id="mask1_1_1467" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="20" y="2" width="16" height="17">
                                                                    <g clipPath="url(#clip2_1_1467)">
                                                                        <g clipPath="url(#clip3_1_1467)">
                                                                            <path d="M32.157 13.6611L31.933 12.6371L32.733 11.9331L34.909 10.0451L35.741 9.30915C36.189 8.92515 36.061 8.57315 35.485 8.50915L33.469 8.38115L30.429 8.09315L29.213 5.30915L28.413 3.48515C28.189 2.94115 27.805 2.94115 27.581 3.48515L26.781 5.30915L25.565 8.09315L22.525 8.38115L20.541 8.57315C19.965 8.63715 19.837 8.98915 20.285 9.37315L23.293 11.9651L24.093 12.6691L23.837 13.6611L22.973 17.5012C22.845 18.0771 23.165 18.3011 23.645 17.9811L26.621 16.2531L28.029 15.4211L30.653 16.9571L32.381 17.9492C32.893 18.2372 33.181 18.0132 33.053 17.4692L32.605 15.5492L32.157 13.6611Z" fill="black" />
                                                                        </g>
                                                                    </g>
                                                                </mask>
                                                                <g mask="url(#mask1_1_1467)">
                                                                    <rect x="20" y="2.62109" width="16" height="16" fill="#F6C800" />
                                                                </g>
                                                                <mask id="mask2_1_1467" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="40" y="2" width="16" height="17">
                                                                    <g clipPath="url(#clip4_1_1467)">
                                                                        <g clipPath="url(#clip5_1_1467)">
                                                                            <path d="M52.157 13.6611L51.933 12.6371L52.733 11.9331L54.909 10.0451L55.741 9.30915C56.189 8.92515 56.061 8.57315 55.485 8.50915L53.469 8.38115L50.429 8.09315L49.213 5.30915L48.413 3.48515C48.189 2.94115 47.805 2.94115 47.581 3.48515L46.781 5.30915L45.565 8.09315L42.525 8.38115L40.541 8.57315C39.965 8.63715 39.837 8.98915 40.285 9.37315L43.293 11.9651L44.093 12.6691L43.837 13.6611L42.973 17.5012C42.845 18.0771 43.165 18.3011 43.645 17.9811L46.621 16.2531L48.029 15.4211L50.653 16.9571L52.381 17.9492C52.893 18.2372 53.181 18.0132 53.053 17.4692L52.605 15.5492L52.157 13.6611Z" fill="black" />
                                                                        </g>
                                                                    </g>
                                                                </mask>
                                                                <g mask="url(#mask2_1_1467)">
                                                                    <rect x="40" y="2.62109" width="16" height="16" fill="#F6C800" />
                                                                </g>
                                                                <mask id="mask3_1_1467" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="60" y="2" width="16" height="17">
                                                                    <g clipPath="url(#clip6_1_1467)">
                                                                        <g clipPath="url(#clip7_1_1467)">
                                                                            <path d="M72.157 13.6611L71.933 12.6371L72.733 11.9331L74.909 10.0451L75.741 9.30915C76.189 8.92515 76.061 8.57315 75.485 8.50915L73.469 8.38115L70.429 8.09315L69.213 5.30915L68.413 3.48515C68.189 2.94115 67.805 2.94115 67.581 3.48515L66.781 5.30915L65.565 8.09315L62.525 8.38115L60.541 8.57315C59.965 8.63715 59.837 8.98915 60.285 9.37315L63.293 11.9651L64.093 12.6691L63.837 13.6611L62.973 17.5012C62.845 18.0771 63.165 18.3011 63.645 17.9811L66.621 16.2531L68.029 15.4211L70.653 16.9571L72.381 17.9492C72.893 18.2372 73.181 18.0132 73.053 17.4692L72.605 15.5492L72.157 13.6611Z" fill="black" />
                                                                        </g>
                                                                    </g>
                                                                </mask>
                                                                <g mask="url(#mask3_1_1467)">
                                                                    <rect x="60" y="2.62109" width="16" height="16" fill="#F6C800" />
                                                                </g>
                                                                <mask id="mask4_1_1467" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="80" y="2" width="16" height="17">
                                                                    <g clipPath="url(#clip8_1_1467)">
                                                                        <g clipPath="url(#clip9_1_1467)">
                                                                            <path d="M92.157 13.6611L91.933 12.6371L92.733 11.9331L94.909 10.0451L95.741 9.30915C96.189 8.92515 96.061 8.57315 95.485 8.50915L93.469 8.38115L90.429 8.09315L89.213 5.30915L88.413 3.48515C88.189 2.94115 87.805 2.94115 87.581 3.48515L86.781 5.30915L85.565 8.09315L82.525 8.38115L80.541 8.57315C79.965 8.63715 79.837 8.98915 80.285 9.37315L83.293 11.9651L84.093 12.6691L83.837 13.6611L82.973 17.5012C82.845 18.0771 83.165 18.3011 83.645 17.9811L86.621 16.2531L88.029 15.4211L90.653 16.9571L92.381 17.9492C92.893 18.2372 93.181 18.0132 93.053 17.4692L92.605 15.5492L92.157 13.6611Z" fill="black" />
                                                                        </g>
                                                                    </g>
                                                                </mask>
                                                                <g mask="url(#mask4_1_1467)">
                                                                    <rect x="80" y="2.62109" width="16" height="16" fill="#F6C800" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(0 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip1_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(0 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip2_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(20 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip3_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(20 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip4_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(40 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip5_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(40 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip6_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(60 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip7_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(60 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip8_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(80 2.62109)" />
                                                                    </clipPath>
                                                                    <clipPath id="clip9_1_1467">
                                                                        <rect width="16" height="16" fill="white" transform="translate(80 2.62109)" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className='mb-4'>
                                                            <p className={testimonialsStyles.slider_text}>{item.text}</p>
                                                        </div>
                                                        <div className='d-flex align-items-center'>
                                                            <div className='me-3'>
                                                                <Image src={clientImg} width='100%' height='100%' alt='client' />
                                                            </div>
                                                            <div>
                                                                <span className={`${testimonialsStyles.slider_name_title} d-block`}>{item.name}</span>
                                                                <span className={`${testimonialsStyles.slider_name_text} d-block`}>{item.city}</span>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                                <Col lg={4}>
                                                    <Card.Body>
                                                        <div className={testimonialsStyles.sliderimg_container}>
                                                            <Image src={item.img} width='100%' height='100%' alt='img' className='img-fluid' />
                                                        </div>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </div>
                                )}
                            </Slider>
                            <div className='d-flex align-items-baseline pt-3'>
                                <button className={`${testimonialsStyles.slider_left_arrow} border-0 bg-transparent me-3`} onClick={previous}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8062 6.63657V8.44097H3.67912L8.79159 13.5964L7.50273 14.8853L0.15625 7.53877L7.50273 0.19229L8.79159 1.48115L3.67912 6.63657H14.8062Z" fill="#2665B0" />
                                    </svg>
                                </button>
                                <button className={`${testimonialsStyles.slider_right_arrow} border-0 bg-transparent`} onClick={next}>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.196192 6.63657V8.44097H11.3233L6.21085 13.5964L7.49971 14.8853L14.8462 7.53877L7.49971 0.19229L6.21085 1.48115L11.3233 6.63657H0.196192Z" fill="#2665B0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default testimonials