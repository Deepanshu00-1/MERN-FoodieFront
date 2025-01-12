import Header from "../HomeSection/Header"
import {useContext, useState,} from "react"
import "./cart.css"
import { items } from "../FoodSection/Card"
import React, { useEffect } from 'react';
import { itemAddedContext } from "../context/addedItemContext";



const Cart =()=>{

    const value = useContext(itemAddedContext)
    const [showPayment, setShowPayment] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const paymentBtn=()=>{
        setShowPayment(true);
    }
    const closeBtn = ()=>{
        setShowPayment(false);
    }

    return(
        <>
        <Header />
        <div className="cartSection">
            <div className="heading">
                <p>Your Cart </p>
                <i className="fa-brands fa-opencart"></i>
            </div>
            <div className="popup" style={{display: showPayment?"flex":'none'}}>
            <i className="fa-solid fa-xmark" onClick={closeBtn} ></i>
                <div className="paymentPopup">
                    <img src="/payment.jpg" alt="" />
                    {/* <h1>{item.foodName}</h1>
                    <p>Total Amount: {item.price}</p> */}
                    <button>Proceed to payment</button>
                </div>
            </div>
            <div className="cartItems">
            {items.map((items,index)=>{
                return(
                    <div key={index} className="cartItem" >
                        <div className="itemImage"><img src={items.Img} alt="" /></div>
                        <div className="itemDetails">
                            <div className="itemName">{items.foodName}</div>
                            <div className="itemPrice">${(items.priceAmount)}</div>
                            {/* <div className="itemDescryption">Quantitiy:  <button className="decreament" onClick={decreaseQuantity}>-</button> <span> {quantity} </span> <button onClick={increaseQuantity} className="increament">+</button></div> */}
                            <button onClick={paymentBtn}>Buy</button>
                        </div>
                    </div>
                )
            })}
            </div>
            <footer className="footer2">
                <h2>FoodieFront</h2>
                <i className="fa-solid fa-cookie-bite"></i>
            </footer>
        </div>
        
        </>
    )
}
export default Cart;