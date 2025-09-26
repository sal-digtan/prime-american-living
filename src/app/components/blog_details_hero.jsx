import React from 'react'
import blog_details_heroStyles from '@/app/components/blog_details_hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const blog_details_hero = () => {
    return (
        <section className={blog_details_heroStyles.blog_hero_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={9}>
                        <div>
                            <h2 className={blog_details_heroStyles.blog_hero_title}>Creating Your Entertainment Haven Of
                                Your Dream .</h2>
                            <p className='text-white fw-medium'>Home - Blog - Creating Your Entertainment Haven Of
                                Your Dream .</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default blog_details_hero