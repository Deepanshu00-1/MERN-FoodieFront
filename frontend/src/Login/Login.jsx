import React from "react";

import { useState } from "react";
import "./login.css";
import { login, signup } from "../config/firebase";
import { Navigate } from "react-router-dom";

const Login = () => {

    const [currState, setCurrentState] = useState('Sign Up');
    const [signupVisible, setSignupVisible] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const onSubmitHandler =(event)=>{
      event.preventDefault();
      if(currState === 'Sign Up'){
        signup(userName, email, password)
      }
      else{
        login(email, password);
      }
    }

    const changeForm=()=>{
        setSignupVisible(!signupVisible);
        setCurrentState(signupVisible? 'Login':'Sign Up');
    }

  return (
    <>
      <div className="darkbg"></div>
      <div className="loginbg">
        <div className="login-part1">
          <img src="/foodiefront.png" alt="" />
        </div>
        <div className="login-part2">
          <form className="login-form" onSubmit={onSubmitHandler}>
            <h2>{currState}</h2>
            <input type="text" onChange={(e)=>{setUserName(e.target.value)}} value={userName}  placeholder="username" className="form-input" style={{display:signupVisible?'flex':'none'}} />
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email}
              type="email"
              placeholder="Email address"
              className="form-input"
            />
            <input onChange={(e)=>{setPassword(e.target.value)}} value={password}
              type="password"
              placeholder="password"
              className="form-input"
            />
            <button >{currState === 'Sign Up'?"Create account":"Login now"}</button>
            <div className="login-forgot">
              <p className="login-toggle" style={{display: signupVisible?'flex':'none'}}>
                Already have an account? ,  <span onClick={changeForm}> click here</span>
              </p>
              <p className="login-toggle" style={{display: signupVisible?'none':'flex'}}>Don't have an account? ,  <span onClick={changeForm}> Create account</span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
