import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeaderDefault from '../components/HeaderDefault';
import FormLogin from '../components/FormLogin';
import loginBg from '../img/girl.jpg';
function Login(props) {
    return (
        <div className="login-page">
            <Nav {...props}/>
            <HeaderDefault srcBg={loginBg} />
            <FormLogin {...props}/>
            <Footer />
        </div>
    )
}

export default Login
