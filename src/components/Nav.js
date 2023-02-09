import React,{useState} from 'react';
import { Row, Container,  Col} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import {auth} from '../ulti'
function  Nav(props) {
    const [navOpen , setNavOpen] = useState(false);
    /* toggle nav  */
    const toggleNav = () => {
        !navOpen? setNavOpen(true) : setNavOpen(false);
        console.log(navOpen);
    }
    const {currentUser} = props;
    return(
        <div className="my-nav">
            <Container  fluid={true}>
                <Row className="justify-content-between align-items-center ">
                    <Col lg={2} md={8} xs={6}>
                        <div className="logo">
                            <a href="/">
                                <h3>april</h3>
                            </a>
                        </div>
                    </Col>
                    <Col lg={8} md={12}  className={`
                            nav-menu d-lg-block animate__animated 
                            /* check nav open  */
                            ${navOpen? `d-block animate__slideInLeft` : ` d-none `}
                    `}>
                        <nav  className="links">
                            <ul className="list-unstyled">
                                <Row className="
                                    flex-lg-row flex-column
                                    justify-content-center align-items-center
                                ">
                                    <div className="close-nav d-lg-none" onClick={toggleNav}>
                                        <i className="fa fa-window-close "></i>
                                    </div>
                                    <li className="link">
                                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                                    </li>
                                    <li className="link">
                                        <NavLink to="/shop" activeClassName="link-active">Shop</NavLink>
                                    </li>
                                    <li className="link">
                                        <NavLink to="/shop" activeClassName="link-active">Blog</NavLink>
                                    </li>
                                    <li className="link">
                                        <NavLink to="/shop" activeClassName="link-active">Pages</NavLink>
                                    </li>
                                    <li className="link">
                                        <NavLink to="/shop" activeClassName="link-active">Contact Us</NavLink>
                                    </li>
                                </Row>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={2} md={4} xs={6}>
                        <div className="actions d-flex align-items-center justify-content-end">
                                {
                                    currentUser? <button className="btn" onClick={ ()=>auth.signOut()}>Log out</button> : (
                                        <>
                                            <Link to="/login"><button className="btn">Login</button></Link>
                                            <Link to="/register"><button className="btn">Register</button></Link>
                                        </>
                                    )
                                }
                            <div className="shopping-cart-nav">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="d-flex justify-content-center align-items-center item-counter">5</span>
                            </div>
                            <div className="menu-bar d-lg-none" onClick={toggleNav}>
                                <i className="fa fa-bars"></i>
                            </div>
                        </div>
                    </Col>
                </Row>  
            </Container>
        </div>
    )
}

Nav.defaultProps ={
    currentUser: null
}

export default  Nav;
