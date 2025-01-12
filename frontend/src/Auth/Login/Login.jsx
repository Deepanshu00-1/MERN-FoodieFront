import {React, useState, useEffect} from "react"
import "./login.css"
import {useNavigate, Link} from "react-router-dom"
import axios from "axios";

const Login =()=>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const submit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/login",{email, password})
        .then(result => {
            if(result.data == "Success"){
                navigate("/home")
            }
        })
        .catch(error => console.log(error))
  }

    return (
        <div className="login-main">
          <div className="login-bg"></div>
          <div className="login">
            <h1>Login</h1>
            <form className="login-form" onSubmit={submit}>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                
              </div>
              <button>Submit</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/"><button className="loginBtn">Signup</button></Link>
          </div>
        </div>
      );
}
export default Login