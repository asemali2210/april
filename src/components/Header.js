import React from 'react'
import {Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className="home-header">
            <Container fluid={true}>
                <Row className="justify-content-center align-items-center">
                        <div className="content text-center d-flex flex-column justify-content-center align-items-center">
                            <h5 className="description"> new sport collection</h5>
                            <h2 className="hash">#newarrivals</h2>
                            <div className="links d-flex">
                                    <Link to="/shop/women">Women</Link>
                                    <Link to="/shop/men">Men</Link>
                                    <Link to="/shop/kid">Kid</Link>
                            </div>
                        </div>
                </Row>
            </Container>
        </div>
    )
}

export default Header
