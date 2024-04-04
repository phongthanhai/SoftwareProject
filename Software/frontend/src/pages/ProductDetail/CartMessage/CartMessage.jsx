import React from 'react';
import "./CartMessage.css";
import { MdOutlineErrorOutline } from "react-icons/md";
const CartItemAddedMessage = () => {
  return (
    <div className='cart-message'>
      <div className='cart-message-icon' style={{display:"flex", justifyContent:"center"}}>
        <img src = "/correct.png" alt = "" />
      </div>
      <h4 className='text-white'>Item is added to cart</h4>
    </div>
  )
}
const CartItemExistMessage = () => {
    return (
      <div className='cart-message'>
        <div className='cart-message-icon'>
          <div style={{display:"flex", justifyContent:"center"}}><MdOutlineErrorOutline style={{color:"white", fontSize:"4rem"}}/></div>
        </div>
        <h4 className='text-white'>Item already in cart</h4 >
      </div>
    )
  }
export {CartItemAddedMessage, CartItemExistMessage} 