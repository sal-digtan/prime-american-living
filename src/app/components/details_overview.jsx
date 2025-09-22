'use client';

import React, { useState } from 'react'
import details_overviewStyles from '@/app/components/details_overview.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import overviewImg1 from '../../../public/overview-img1.png';
import overviewImg2 from '../../../public/benefits-bannerbg.jpg';
import overviewImg3 from '../../../public/overview-img5.jpg';
import overviewImg4 from '../../../public/overview-img6.jpg';

const details_overview = () => {

    const overviewImages = [
        {
            id: 1,
            img: overviewImg2
        },
        {
            id: 2,
            img: overviewImg3
        },
        {
            id: 3,
            img: overviewImg4
        },
    ]

    const [overviewImg, setOverviewImg] = useState(overviewImg1)

    return (
        <section className={details_overviewStyles.container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={8}>
                        <div className={details_overviewStyles.mainimg_container}>
                            <Image src={overviewImg} width='100%' height='100%' alt='overview-img' className={`${details_overviewStyles.overview_img} img-fluid`} />
                        </div>
                        <div>
                            <Row>
                                {overviewImages.map((item, index) =>
                                    <Col lg={4} key={index}>
                                        <div className={details_overviewStyles.thumbnailimg_container}>
                                            <Image onClick={() => setOverviewImg(item.img)} src={item.img} width='100%' height='100%' alt='overview-img' className={`${details_overviewStyles.overview_img} img-fluid`} />
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                        <div className='pt-4'>
                            <p className={details_overviewStyles.overview_subtitle}>Property Overview</p>
                            <h4 className={details_overviewStyles.overview_title}>Panorama Place</h4>
                            <p className={details_overviewStyles.overview_text}>Move-in ready homes fully equipped with stylish furniture, modern appliances, and tasteful décor — perfect for homeowners
                                or tenants who want immediate comfort without the hassle of setting up.dwe mmodo ullamcorper. Amet tellus cras adipiscing enim. Semper feugiat nibh sedpulvinar. Bibendum neque egestas congue quisque egestas diam in. Maecenas pharetra convallis
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default details_overview