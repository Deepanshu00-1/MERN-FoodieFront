import { NavLink } from "react-router-dom";
import { logout } from "../config/firebase";
import "./css/header.css"
import { countContext } from "../context/count";
import { useContext, useState } from "react";
import { NotifyContext } from "../context/itemNotificationContext";
import {useNavigate} from "react-router-dom"


const Header = ()=>{
    let value = useContext(countContext);
    const[resnavVisible, setResnavVisible] = useState(false)

    const resNavOpen=()=>{
        setResnavVisible(true)
    }
    const resNavClose=()=>{
        setResnavVisible(false)
    }
    const navigate = useNavigate();
    const logout = ()=>{
        navigate("/");
    }

    let notify = useContext(NotifyContext)

    return(
        <>
        <header>
            <div className="logo">
                <NavLink to ="/home">
                <img src="/foodiefront.png" alt="" /></NavLink>
            </div>
            <div className="nav">
                <h3>
                    <NavLink to='/home'>Home</NavLink>
                </h3>
                <h3>
                    <NavLink to='/menu'>Menu</NavLink>
                </h3>
                <NavLink to='/cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cartNotification">{value.count}</div>
                </NavLink>
            </div>
            <div className="search">
                {/* <div className="search-part">
                    <input type="text" name="search" placeholder="Search..."/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div> */}
                <button onClick={logout}>Logout</button>
                <span id="notif" style={{display:notify.notify?"flex":"none"}}></span>
                <i className="fa-solid fa-bars" onClick={resNavOpen}></i>
            </div>
        </header>
        <div id="responsiveNav" className="responsive-nav" style={{display:resnavVisible?"flex":"none"}}>
            <i className="fa-solid fa-arrow-right" id="closeIcon" onClick={resNavClose}></i>
                <h2 >
                    <NavLink to='/home'>Home</NavLink>
                </h2>
                <h2>
                    <NavLink to='/menu'>Menu</NavLink>
                </h2>
                <NavLink to='/cart'>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cartNotification">{value.count}</div>
                </NavLink>
                <button onClick={logout} >Logout</button>
            </div>
        {/* <div className="responsiveNav" >
                <i className="fa-solid fa-arrow-right" id="closeIcon"></i>
                <div className="nav1">
                    <h3>Home</h3>
                    <h3>Menu</h3>
                    <h3 className="contact">Contact</h3>
                </div>
                <div className="nav2">
                    {/*()=>dispatch(toggleBtn())*/}
                    {/* <button >Login</button>
                    <div></div>
                    <button>Sign up</button>
                </div>
            </div> */}
        </>
    )
}
export default Header;