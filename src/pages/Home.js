import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Features from '../components/Features'
import Categories from '../components/Categories'
import Blog from '../components/Blog'
import CountDown from '../components/CountDown'
import Partner from '../components/Partner'
import Footer from '../components/Footer'
function Home(props) {
    return (
        <div className="home">
            <Nav {...props}/>
            <Header />
            <Features  isHome/>
            <Categories  />
            <Blog  />
            <CountDown  />
            <Partner  />
            <Footer  />
        </div>
    )
}

export default Home;
