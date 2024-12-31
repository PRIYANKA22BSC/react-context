import React from 'react';
import './App.css';
import { useCart } from './CartContext.jsx';
import Cart from './cart.jsx';

export default function Payment() {
  const { cartItems } = useCart();

  return (
  
     
      <div id="contact-section-form">
        <form id="form">
          <label >
            <b>Enter card number:</b><br/>
            <input
              type="text"
              placeholder="Enter card number"
              className="input"
             
              required
            />
          </label>
          <label>
            <b> Card Expiry date:</b><br/>
            <input
              type="date"
              placeholder="Enter card number"
              className="input"
              required
            />
          </label>
          <label>
            <b>Enter cvv number:</b><br/>
            <input
              type="text"
              placeholder="Enter cvv number"
              className="input"
              required
            />
          </label>
          <button id="submit-btn">Submit</button>
        </form>
        <Cart isOnShopPage={false} />
      </div>
     
   
  );
}
