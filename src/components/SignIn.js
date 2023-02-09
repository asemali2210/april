import React from 'react'
import {Link} from 'react-router-dom';
function SignIn() {
    return (
        <div className="login">
            <h4>Log in</h4>
            <p>Log in to your account to discover all great features in this template</p>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <div className="check">
                <input type='checkbox' name="remember"/>
                <p>Keep me logged in</p>
                <p className="alert">
                    <a href="/">Forget Your password</a>
                </p>
            </div>
            <p className="user-state">Don't have an account? <Link to="/register">Register</Link></p>
            <button className="btn btn-black">
                Login
            </button>
        </div>
    )
}

export default SignIn
