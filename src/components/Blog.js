import React from 'react'
import {Col, Row, Container} from 'react-bootstrap';
import BlogCard from './BlogCard';
import blogImg1 from '../img/blog-1.jpg'
import blogImg2 from '../img/blog-2.jpg'
import blogImg3 from '../img/blog-3.jpg'
function Blog() {
    return (
        <div className="home-blogs">
            <Container>
                <Row>
                    <Col md={12}>
                        <header className="header text-center">
                            <h4>#blog.update</h4>
                        </header>
                    </Col>
                    <Col md={4}>
                        <BlogCard 
                            src={blogImg1}
                            title="How I Stay Inspired & Come Up with New Ideas"
                            link="/blogs"
                            Categori="LIFESTYLE"
                        />
                    </Col>
                    <Col md={4}>
                        <BlogCard 
                            src={blogImg2}
                            title="A Label For Women Who Don't Like To be Labeled"
                            link="/blogs"
                            Categori="LIFESTYLE"
                        />
                    </Col>
                    <Col md={4}>
                        <BlogCard 
                            src={blogImg3}
                            title="Our Totally Bomb Bommer Jackets"
                            link="/blogs"
                            Categori="FASHION"
                        />
                    </Col>
                    <Col md={12}>
                        <h5 className="footer-header text-center">
                            <a href="/blogs">
                                Go to blogs
                            </a>
                        </h5>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Blog;
