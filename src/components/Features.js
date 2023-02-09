import React from 'react';
import {Row, Container, Col} from 'react-bootstrap';
function Feature({icon,iconColor, title, content}) {
    return(
        <div className="feat text-center">
            <i className={`fa fa-${icon}`} style={{color: iconColor}}></i>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}
function Features({isHome}) {
    return (
        <div className="our-features">
            <Container>
                <Row>
                    {
                        isHome &&  
                        <Col md={12}>
                            <header className="header text-center">
                                Style is way to say who are you with out <br /> having to speak
                            </header>
                            <div className="owner text-center">ANAIS COULON / <small>CEO</small></div>
                        </Col> 
                    }
                    <Col md={4}>
                        <Feature 
                            icon="lock"
                            iconColor="#859cce"
                            title="Secure Payments"
                            content="Support 24 / 7"
                        />
                    </Col>
                    <Col md={4}>
                        <Feature 
                            icon="wind"
                            iconColor="#f6d0c5"
                            title="Free Shipping"
                            content="All order over $50"
                        />
                    </Col>
                    <Col md={4}>
                        <Feature 
                            icon="headset"
                            iconColor="#7fd8e0"
                            title="Support Customer"
                            content="Support 24 / 7"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features
