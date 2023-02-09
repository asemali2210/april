import React from 'react'
import {Row, Container, Col} from 'react-bootstrap';    
import menImg from '../img/men.jpg'
import womenImg from '../img/girl.jpg'
import bagsImg from '../img/bag-1.jpg'
import newArrivals from '../img/newarrival.jpg'
import springImg from '../img/spring.jpg'
import saleImg from '../img/sale.jpg'
import accessoriesImg from '../img/accessories.jpg'
import shoesImg from '../img/shoes.jpg'
function CategorieItem({src, title,link, className}){
    return(
        <div className={`categorie-item ${className}`} >
            <img src={src} alt={title} />
            <a href={link}>
                <h4 className="categorie-title">{title}</h4>
            </a>
        </div>
    )
}
function Categories() {
    return (
        <div className="home-categories">
            <Container  fluid={true}>
                <Row className="fisrt-row">
                    <Col md={6}>
                        <CategorieItem 
                            src={womenImg}
                            title="#women"
                            link="/shop/women"
                            className="full-height"
                        />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <CategorieItem 
                                src={accessoriesImg}
                                title="#accessories"
                                link="/shop/accessories"
                                className="half-height"
                                />
                            </Col>
                            <Col md={6}>
                                <CategorieItem 
                                    src={bagsImg}
                                    title="#bags"
                                    link="/shop/bags"
                                    className="half-height"
                                />
                            </Col>
                            <Col md={6}>
                                <CategorieItem 
                                    src={saleImg}
                                    title="#sale"
                                    link="/shop/sales"
                                    className="half-height"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row  className="sec-row">
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <CategorieItem 
                                    src={newArrivals}
                                    title="#newarrivals"
                                    link="/shop/new-arrivals"
                                    className="half-height"
                                />
                            </Col>
                            <Col md={6}>
                                <CategorieItem 
                                    src={shoesImg}
                                    title="#shoes"
                                    link="/shop/shoes"
                                    className="half-height"
                                />
                            </Col>
                            <Col md={6}>
                                <CategorieItem 
                                    src={springImg}
                                    title="#Spring Looks"
                                    link="/shop/spring"
                                    className="half-height"
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <CategorieItem 
                            src={menImg}
                            title="#men"
                            link="/shop/men"
                            className="full-height"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Categories
