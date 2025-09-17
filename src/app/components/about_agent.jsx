import React from 'react'
import agentStyles from '@/app/components/about_agent.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import agentImg1 from '../../../public/agent-img1.png';
import agentImg2 from '../../../public/agent-img2.png';
import agentImg3 from '../../../public/agent-img3.png';
import agentImg4 from '../../../public/agent-img4.png';
import agentImg5 from '../../../public/agent-img5.png';
import agentImg6 from '../../../public/agent-img6.png';

const about_agent = () => {

    const agentsData = [
        {
            id: 1,
            img: agentImg1,
            title: 'Archie Barrett',
            text: 'Real Estate Manager'
        },
        {
            id: 2,
            img: agentImg2,
            title: 'Brian Holloway',
            text: 'Listing Coordinator'
        },
        {
            id: 3,
            img: agentImg3,
            title: 'Gail Williams',
            text: 'Property Developer'
        },
        {
            id: 4,
            img: agentImg4,
            title: 'Jesse Rivera',
            text: 'Leasing Consultant'
        },
        {
            id: 5,
            img: agentImg5,
            title: 'John Wiq',
            text: 'Marketing'
        },
        {
            id: 6,
            img: agentImg6,
            title: 'Leon Richards',
            text: 'Real Estate Appraiser'
        },
    ]

    return (
        <section className={agentStyles.agent_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={12}>
                        <div className='text-center mb-4'>
                            <p className={agentStyles.about_agent_subtitle}>Property Partners</p>
                            <h2 className={agentStyles.about_agent_title}>Meet Our Expert Agents.</h2>
                        </div>
                    </Col>
                    {agentsData.map((item, index) =>
                        <Col key={index} lg={2} md={4} className='d-flex align-items-center justify-content-center flex-column'>
                            <div className={`${agentStyles.agent_img_container} mb-3 text-center`}>
                                <Image src={item.img} width='100%' height='100%' className='img-fluid' alt='agent-img' />
                            </div>
                            <div className='text-center'>
                                <h5 className={agentStyles.agent_title}>{item.title}</h5>
                                <p className={agentStyles.agent_text}>{item.text}</p>
                            </div>
                        </Col>
                    )}
                </Row>
            </Container>
        </section>
    )
}

export default about_agent