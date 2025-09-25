'use client';

import React, { useState } from 'react'
import bloglistStyles from '@/app/components/blog_list.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bloglistimg1 from '../../../public/bloglist-img1.png';
import bloglistimg2 from '../../../public/bloglist-img2.png';
import bloglistimg3 from '../../../public/bloglist-img3.png';
import bloglistimg4 from '../../../public/bloglist-img4.png';
import bloglistimg5 from '../../../public/bloglist-img5.png';
import bloglistimg6 from '../../../public/bloglist-img6.png';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';
import postimg1 from '../../../public/post-img1.png';
import postimg2 from '../../../public/post-img2.png';
import postimg3 from '../../../public/post-img3.png';
import blogadImg from '../../../public/blog-ad-img.png';

const blog_list = () => {

    const blogData = [
        {
            id: 1,
            datetext: 'March 26, 2024',
            tag: 'Concept',
            title: 'Unlocking the Door: Exploring Real Estate Trends and Insights !',
            text: 'Ac ut consequat semper viverra. Facilisi etiam dignissim diam quis enim lobortis. Eu feugiat pretium nibh ipsum consequat nisl...',
            img: bloglistimg1
        },
        {
            id: 2,
            datetext: 'March 26, 2024',
            tag: 'Rooftop Terrace',
            title: 'Tips for Creating Your Perfect Open-Air Haven .',
            text: 'Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. A diam maecenas sed enim ut sem viverra aliquet...',
            img: bloglistimg2
        },
        {
            id: 3,
            datetext: 'March 26, 2024',
            tag: 'City Views, Concept, Rooftop Terrace',
            title: 'A Quick Guide On Real Estate Essentials .',
            text: 'Praesent tristique magna sit amet purus gravida. Venenatis a condimentum vitae sapien pellentesque habitant.Tincidunt eget nullam non.',
            img: bloglistimg3
        },
        {
            id: 4,
            datetext: 'March 26, 2024',
            tag: 'City Views',
            title: 'Why Client Consultation Corner Should Be Your First Step',
            text: 'Habitasse platea dictumst quisque sagittis purus. Egestas erat imperdiet sed euismod nisi porta lorem mollis.Volutpat est.',
            img: bloglistimg4
        },
        {
            id: 5,
            datetext: 'March 26, 2024',
            tag: 'City Views, Concept, Rooftop Terrace',
            title: 'The Ultimate Guide to Making the Best Choice Of Your Own World .',
            text: 'Erat velit scelerisque in dictum non. Quis commodo odio aenean sed adipiscing diam.Turpis egestas pretium aenean pharetra magna.',
            img: bloglistimg5
        },
        {
            id: 6,
            datetext: 'March 26, 2024',
            tag: 'City Views, Concept, Rooftop Terrace',
            title: 'Best Cozy Cottage Living For This Summer',
            text: 'Accumsan tortor posuere ac ut consequat semper viverra. Adipiscing at in tellus integer feugiat. Dictumst quisque sagittis purus sit.',
            img: bloglistimg6
        },
    ]

    const [active, setActive] = useState(1)

    let items = [];
    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => setActive(number)} active={number === active} className='me-3'>
                {number === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" fill={active === number ? '#fff' : '#000'} />
                </svg>
                    : number}
            </Pagination.Item>,
        );
    }

    const postsData = [
        {
            id: 1,
            img: postimg1,
            datetext: 'March 26, 2024',
            title: 'All The Pre -plans That Need To Ensure Safety & Security Before Buying A Property.'
        },
        {
            id: 2,
            img: postimg2,
            datetext: 'March 26, 2024',
            title: 'Cottage Living Essentials & The Simple Comfort It Gives .'
        },
        {
            id: 3,
            img: postimg3,
            datetext: 'March 26, 2024',
            title: 'The Art of Interiors Over The Years'
        },
    ]

    const tags = ['City Views', 'Concept', 'Rooftop Terrace']

    return (
        <section className={bloglistStyles.bloglist_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={8}>
                        <Row>
                            {blogData.map((item, index) =>
                                <Col key={index} lg={6} md={6}>
                                    <a href="#" className='text-decoration-none'>
                                        <Card className={bloglistStyles.bloglist_card}>
                                            <div className='position-relative'>
                                                <Image src={item.img} width='100%' height='100%' alt='bloglist-img' className={`${bloglistStyles.card_img} img-fluid`} />
                                                <div className='position-absolute bottom-0 start-0 translate-middle-y ms-2'>
                                                    <span className={bloglistStyles.tag_container}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-tag-fill" viewBox="0 0 16 16">
                                                            <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                                        </svg>
                                                        {item.tag}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='pt-4'>
                                                <p className={bloglistStyles.date_text}>{item.datetext}</p>
                                                <h4 className={bloglistStyles.card_title}>{item.title}</h4>
                                                <p className={bloglistStyles.card_text}>{item.text}</p>
                                                <p className={bloglistStyles.card_linktext}>
                                                    Read More
                                                    <svg className='ms-2' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.0546875 7.73014C0.0546875 8.23414 0.446688 8.62614 0.950688 8.62614H10.9187L7.05469 12.3781C6.71869 12.7141 6.71869 13.2741 7.05469 13.6101C7.22269 13.7781 7.44669 13.8901 7.67069 13.8901C7.89469 13.8901 8.11869 13.7781 8.28669 13.6101L13.7187 8.34614C13.7747 8.29014 13.7747 8.23414 13.8307 8.23414C13.8307 8.23414 13.8307 8.17814 13.8867 8.17814C13.8867 8.12214 13.9427 8.12214 13.9427 8.06614C13.9427 8.01014 13.9427 8.01014 13.9987 7.95414V7.89814C13.9987 7.78614 13.9987 7.67414 13.9987 7.56214V7.50614C13.9987 7.45014 13.9987 7.45014 13.9427 7.39414C13.9427 7.33814 13.8867 7.33814 13.8867 7.28214C13.8867 7.28214 13.8867 7.22614 13.8307 7.22614C13.7747 7.17014 13.7747 7.11414 13.7187 7.11414L8.28669 1.85014C7.95069 1.51414 7.33469 1.51414 6.99869 1.85014C6.66269 2.18614 6.66269 2.74614 6.99869 3.08214L10.8627 6.83414H0.950688C0.446688 6.83414 0.0546875 7.22614 0.0546875 7.73014Z" fill="black" />
                                                    </svg>
                                                </p>
                                            </div>
                                        </Card>
                                    </a>
                                </Col>
                            )}
                        </Row>
                        <div className='d-flex justify-content-center mt-3'>
                            <Pagination>{items}</Pagination>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className={bloglistStyles.right_col}>
                            <div className='mb-3'>
                                <h4 className={bloglistStyles.right_col_title}>Search</h4>
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Keyword" className={bloglistStyles.form_input} />
                                </Form.Group>
                            </Form>
                            <div className='py-3'>
                                <div className='mb-3'>
                                    <h4 className={bloglistStyles.right_col_title}>Recent Posts</h4>
                                </div>
                                {postsData.map((item, index) =>
                                    <a href='#' key={index} className='text-decoration-none'>
                                        <div className='mb-3 d-flex'>
                                            <div>
                                                <Image src={item.img} width='100%' height='100%' alt='post-img' className={bloglistStyles.posts_img} />
                                            </div>
                                            <div>
                                                <p className={`${bloglistStyles.date_text} mb-2`}>{item.datetext}</p>
                                                <h5 className={bloglistStyles.posts_title}>{item.title}</h5>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </div>
                            <div className='py-3'>
                                <div className='mb-3'>
                                    <h4 className={bloglistStyles.right_col_title}>Tags</h4>
                                </div>
                                <div className={bloglistStyles.tags_container}>
                                    {tags.map((item) =>
                                        <div key={item} className={bloglistStyles.tagitem_container}>
                                            <span>{item}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='py-3'>
                                <a href="#">
                                    <Image src={blogadImg} width='100%' height='100%' alt='ad-img' className={bloglistStyles.adimg} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default blog_list