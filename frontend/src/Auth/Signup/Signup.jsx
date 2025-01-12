import { React, useState, useEffect } from "react";
import axios from "axios";
import "./signup.css"
import {useNavigate, Link} from "react-router-dom";

const Signup = () => {
  const[username, setUsername] = useState();
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  const navigate = useNavigate();

  const submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/signup", {username, email, password})
    .then(result => {
      console.log(result)
      navigate("/login")
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="signup-main">
      <div className="signup-bg"></div>
      <div className="signup">
        <h1>Signup</h1>
        <form className="signup-form" onSubmit={submit}>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter Username" onChange = {e => setUsername(e.target.value)} />
           
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter Email" onChange = {e => setEmail(e.target.value)} />
            
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter Password" onChange = {e => setPassword(e.target.value)} />
            
          </div>
          <button>Submit</button>
        </form>
        <p>Already have an account?</p>
        <Link to ="/login"><button className="loginBtn">Login</button></Link>
      </div>
    </div>
  );
};
export default Signup;
