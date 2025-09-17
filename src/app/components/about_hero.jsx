import React from 'react'
import aboutheroStyles from '@/app/components/about_hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const about_hero = () => {
    return (
        <section className={aboutheroStyles.about_hero_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col>
                        <div>
                            <h2 className={aboutheroStyles.about_hero_title}>About Prime American Living</h2>
                            <p className='text-white fw-medium'>Home - About Us</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default about_hero