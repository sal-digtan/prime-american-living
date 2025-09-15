'use client';

import React from 'react'
import helpformStyles from '@/app/components/helpform.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const helpform = () => {
    return (
        <section className={helpformStyles.helpform_container}>
            <Container fluid className='px-lg-4'>
                <Row>
                    <Col lg={6} className='mb-lg-0 mb-3'>
                        <div>
                            <p className={helpformStyles.helpform_subtitle}>Find Us Fast</p>
                            <h2 className={helpformStyles.helpform_title}>Have a Question? Get Instant Help</h2>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={helpformStyles.form_container}>
                            <Form>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={helpformStyles.form_label}>Name*</Form.Label>
                                            <Form.Control type="text" placeholder="Mimosic john" className={helpformStyles.form_control} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={helpformStyles.form_label}>Email*</Form.Label>
                                            <Form.Control type="email" placeholder="your@email.com" className={helpformStyles.form_control} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={helpformStyles.form_label}>Phone*</Form.Label>
                                            <Form.Control type="text" placeholder="0123456789" className={helpformStyles.form_control} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className={helpformStyles.form_label}>Property ID#</Form.Label>
                                            <Form.Control type="email" placeholder="#43584" className={helpformStyles.form_control} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className={helpformStyles.form_label}>Additional Message</Form.Label>
                                            <Form.Control as="textarea" rows={5} placeholder='Please write any note here...' className={helpformStyles.form_control} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div>
                                    <Button variant="primary" className={helpformStyles.form_btn}>Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default helpform