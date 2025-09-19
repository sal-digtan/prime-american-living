import React from 'react'
import listings_heroStyles from '@/app/components/listings_hero.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapImg from '../../../public/helpformbg-img.png';
import Image from 'next/image';

const listings_hero = () => {
    return (
        <section className={listings_heroStyles.listings_hero_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col>
                        <div>
                            <Image src={mapImg} width='100%' height='100%' className={`${listings_heroStyles.mapimg} img-fluid`} alt='map' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default listings_hero