import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import partnerImg1 from '../img/partner-1.jpg'
import partnerImg2 from '../img/partner-2.webp'
import partnerImg3 from '../img/partner-3.png'
import partnerImg4 from '../img/partner-4.png'
import partnerImg5 from '../img/partner-5.png'
function Partner() {
    return (
        <div className="our-partner">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col  xs={2}>
                        <img src={partnerImg1} className="w-100"  alt="partner"/>
                    </Col>
                    <Col  xs={2}>
                        <img src={partnerImg2} className="w-100"  alt="partner"/>
                    </Col>
                    <Col  xs={2}>
                        <img src={partnerImg3} className="w-100"  alt="partner"/>
                    </Col>
                    <Col  xs={2}>
                        <img src={partnerImg4} className="w-100" alt="partner" />
                    </Col>
                    <Col  xs={2}>
                        <img src={partnerImg5} className="w-100"  alt="partner" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Partner
