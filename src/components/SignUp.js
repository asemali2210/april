import React from 'react'
import {Link} from 'react-router-dom';
import {signWithGoogle,signWithFacebook} from '../ulti';
function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="register">
        <form onSubmit={handleSubmit}>
        <h4>Register</h4>
            <p>if you don't have an account, reggisttr now!</p>
            <input type="text" name="username" placeholder="Username" />
            <input tye="email" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="rePassword" placeholder="Re-Password" />
            <div className="check">
                <input type='checkbox' name="remember"/>
                <p>Keep me logged in</p>
                <p className="alert">
                    <a href="/">Forget Your password</a>
                </p>
            </div>
            <p className="user-state">Already Registered? <Link to="/Login">Login</Link></p>
            <button className="btn btn-black">
                    Register
            </button>
            <button className="btn btn-black" onClick={signWithGoogle}>
                Google
            </button>
            <button className="btn btn-black" onClick={signWithFacebook}>
                Facebook
            </button>
        </form>
        </div>
    )
}

export default SignUp;
