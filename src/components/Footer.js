import React from 'react';
import {Col, Row,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={6} lg={3}>
                        <div className="footer-list text-center text-md-left licence">
                            <h2>april</h2>
                            <p>COPYRIGHT  2017A-PRIL<br />ALL RIGHTS RESERVED</p>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="footer-list text-center text-md-left d-flex flex-column" >
                            <h4>About April</h4>
                            <Link to="/about">About us</Link>
                            <a href="/">Office</a>
                            <a href="/">Work with us</a>
                            <a href="/">Our policies</a>
                            <a href="/">Affinity</a>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="footer-list text-center text-md-left d-flex flex-column" >
                            <h4>Shopguide</h4>
                            <a href="/">Payment</a>
                            <a href="/">Returns</a>
                            <a href="/">Guest parchase</a>
                            <a href="/">Gift Card</a>
                            <a href="/">Term & Conditions</a>
                        </div>
                    </Col>
                    <Col md={6} lg={3}>
                        <div className="footer-list text-center text-md-left d-flex flex-column" >
                            <h4>Newsletter</h4>
                            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                            <div className="footer-input">
                                <input type="email" placeholder="Enter your email" />
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="social-icons d-flex">
                                <a href="/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
