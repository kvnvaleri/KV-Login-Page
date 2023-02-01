import React from "react";
import './login.css'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const[email, emailupdate] = useState('')
    const[password, passwordupdate] = useState('')
    
    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
            fetch("https://63d7e6dfafbba6b7c946e9c9.mockapi.io/api/loginpagekv/login").then((res) => {
                return res.json()
            }).then((resp)=>{
                if(Object.keys(resp).lenght===0){
                alert('Please Enter Valid Email and Password')
                }else{
                    if(password === password){
                        alert('Succes')
                        console.log(resp)
                    }else{
                        alert('Please Enter Valid Password')
                    }
                }

            }).catch((err)=>{
                alert('Login Failed due to : Email or Password is Wrong')
            })
        }
    }
    const validate = () => {
        let result = true
        if(email === "" || email === null){
            result=false
            alert('Please Enter Email')
        }
        if(password === "" || password === null){
            result=false
            alert('Please Enter Password')
        }
        return result;
    }

    return (
        <div className="login-main-page">
            <form className="login-main" onSubmit={ProceedLogin}>
                <div className="input">
                    <h1 htmlFor="email" className="welcome">Welcome!</h1>
                    <h2 className="login-text">Login with your detail</h2>
                    <input value={email} onChange={e=>emailupdate(e.target.value)} type="email" className="email" placeholder="Enter your email" />
                    <br/>
                    <input value={password} onChange={e=>passwordupdate(e.target.value)} type="password" className="password" placeholder="Enter your password" />
                    <br />
                    <input type="checkbox" className="remember" id="remember-password" name="remember-password" />
                    <label for="remember-password" className="remember-password">Remember Password</label>
                    <a href="https://google.com" className="forgot-password">Forgot Password</a>
                    <br />
                </div>
                <button className="login-button">Login</button>
                <h4 className="or">Or</h4>
                <a href="https://google.com" className="google-login">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="white"/>
                    <path d="M24.0001 17.6213C25.953 17.6213 27.2704 18.4649 28.0215 19.1698L30.9566 16.304C29.1539 14.6285 26.8081 13.6 24.0001 13.6C19.9326 13.6 16.4197 15.9342 14.7095 19.3316L18.0721 21.9431C18.9157 19.4356 21.2499 17.6213 24.0001 17.6213Z" fill="#EA4335"/>
                    <path d="M33.984 24.2311C33.984 23.376 33.9147 22.752 33.7644 22.1049H24V25.9644H29.7316C29.616 26.9236 28.992 28.368 27.6053 29.3387L30.8871 31.8809C32.8516 30.0667 33.984 27.3973 33.984 24.2311Z" fill="#4285F4"/>
                    <path d="M18.0837 26.0569C17.8641 25.4098 17.737 24.7164 17.737 24C17.737 23.2836 17.8641 22.5902 18.0721 21.9431L14.7094 19.3316C14.0045 20.7413 13.6001 22.3244 13.6001 24C13.6001 25.6756 14.0045 27.2587 14.7094 28.6684L18.0837 26.0569Z" fill="#FBBC05"/>
                    <path d="M24.0003 34.4C26.8083 34.4 29.1656 33.4756 30.8874 31.8809L27.6056 29.3387C26.7274 29.9511 25.5487 30.3787 24.0003 30.3787C21.2501 30.3787 18.9159 28.5645 18.0839 26.0569L14.7212 28.6685C16.4314 32.0658 19.9327 34.4 24.0003 34.4Z" fill="#34A853"/>
                </svg>
                </a>
                <a href="https://facebook.com" className="facebook-login">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z" fill="#1877F2"/>
                    <path d="M33.3423 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6782 15.75 31.6595 15.75H34.6875V9.84375C34.6875 9.84375 31.9407 9.375 29.3156 9.375C23.8314 9.375 20.2501 12.6984 20.2501 18.7125V24H14.1562V30.9375H20.2501V47.7094C21.4735 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3423Z" fill="white"/>
                </svg>
                </a>
                <h4 className="dont-have-account">Don't have account?<a href="https://google.com" className="signup">&nbsp;&nbsp;Signup</a></h4>
            </form>
        </div>
    )
}

export default Login
