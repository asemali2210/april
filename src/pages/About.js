import React from 'react';
import Nav from '../components/Nav';
import HeaderDefault from '../components/HeaderDefault';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';  
import Partner from '../components/Partner';
import aboutBg from '../img/aboutBg.jpg';
function About() {
    return (
        <div className="about-page">
            <Nav />
            <HeaderDefault srcBg={aboutBg} />
            <AboutContent />
            <Partner />
            <Footer />
        </div>
    )
}

export default About
