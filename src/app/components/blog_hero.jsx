import React from 'react'
import blogheroStyles from '@/app/components/blog_hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const blog_hero = () => {
    return (
        <section className={blogheroStyles.blog_hero_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col>
                        <div>
                            <h2 className={blogheroStyles.blog_hero_title}>Blog</h2>
                            <p className='text-white fw-medium'>Home - Blog</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default blog_hero