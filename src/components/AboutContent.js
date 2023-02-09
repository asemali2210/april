import React from 'react'
import {Row,Container,Col} from 'react-bootstrap';
import aboutImg from '../img/aboutImg.jpg';
import storeImg from '../img/store.jpg';
import team1 from '../img/team1.jpg';
import team2 from '../img/team2.jpg';
import team3 from '../img/men.jpg';
import Features from '../components/Features';
import {Link} from 'react-router-dom';
function AboutContent() {
    return (
        <div className="about-content">
            <Container>
                <Row className="align-items-center">
                    <Col md={1} className="d-none d-md-block">
                        <h4 className="heading"># April Store</h4>
                    </Col>
                    <Col md={5}>
                        <img src={aboutImg} alt="about" className="img-fluid"/>
                    </Col>
                    <Col md={6}>
                        <div className="biography">
                        <h4>Style is way to say who are you with out having to speak</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <Link to="/shop">shop now</Link>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            <Features />
            <Container>
                <div className="team">
                    <h3 className="heading-team">#april.store</h3>
                    <img className="img-fluid w-100" src={storeImg} alt="store"/>
                </div>
                <div className="our-team">
                    <Row>
                        <Col md={4}>
                            <div className="team-member">
                                <p>" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
                                <div className="d-flex align-items-center">
                                    <img className="member-img" src={team1} alt="team-member"/>
                                    <p className="job">LEE BUI /<span>Designer</span></p> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="team-member">
                                <p>" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
                                <div className="d-flex align-items-center">
                                    <img className="member-img" src={team2} alt="team-member"/>
                                    <p className="job">IRYNA PETRUNKO /<span>Modal</span></p> 
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>        
                            <div className="team-member">
                                <p>" Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
                                <div className="d-flex align-items-center">
                                    <img className="member-img" src={team3} alt="team-member"/>
                                    <p className="job">ANAIS /<span>CEO</span></p> 
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default AboutContent
