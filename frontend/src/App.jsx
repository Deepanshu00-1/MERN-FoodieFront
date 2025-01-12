import React, { useState ,useEffect } from "react"
// import Login from "./Login/Login"
import {Routes, Route, useNavigate} from "react-router-dom";
import Header from "./HomeSection/Header";
import HeroSection from "./HomeSection/HeroSection";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import MenuSection from "./MenuSection/MenuSection";
import Cart from "./Cart/Cart";
import Home from "./Home";
import { countContext } from "./context/count";
import { itemAddedContext } from "./context/addedItemContext";
import { NotifyContext } from "./context/itemNotificationContext";
import Signup from "./Auth/Signup/Signup";
import Login from "./Auth/Login/Login";

const App = ()=>{
  const navigate = useNavigate();

  // useEffect(()=>{
  //   onAuthStateChanged(auth, async(user)=>{
  //     if(user){
  //       navigate('/home')
  //     }
  //     else{
  //       navigate('/')
  //     }
  //   })
  // },[auth])

  let [count, setCount] = useState(0);
  let [cartItems, setCartItems] = useState([]);

  let [notify, setNotify] = useState(false)

  return(
    <>
    <ToastContainer />
    <NotifyContext.Provider value = {{notify, setNotify}}>
    <countContext.Provider value = {{count, setCount}}>
    <itemAddedContext.Provider value={{cartItems, setCartItems}}>
    <Routes>
      <Route path ="/" element ={<Signup />}/>
      <Route path ="/login" element ={<Login />}/>      
      <Route path ="/home" element={<Home />}/>
      <Route path ="/menu" element ={<MenuSection />}/>
      <Route path ="/cart" element ={<Cart />}/>
    </Routes>
    </itemAddedContext.Provider>
    </countContext.Provider>
    </NotifyContext.Provider>
    </>
  )
}

export default App