import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

function Cart({ isOnShopPage }) {
  const { cartItems, increaseQty, decreaseQty } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div id="cart-items-container">
      <h1 id="cart-heading">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div id="cart-list">
          <table>
            <thead>
              <tr>
                <td><b>Image</b></td>
                <td><b>Item</b></td>
                <td><b>Qty</b></td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} className="cart-img" alt="cart-item" />
                  </td>
                  <td>
                    {item.name}<br />${item.price}
                  </td>
                  <td className="qty">
                    <button onClick={() => decreaseQty(item.id)}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <b>{item.qty}</b>
                    <button onClick={() => increaseQty(item.id)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div id="total-amt">Total Amount ${totalAmount}</div>
      {isOnShopPage ? (
        <Link to="/payment">
          <button id="payment-btn">Proceed to Pay</button>
        </Link>
      ) : (
        <Link to="/shop">
          <button id="shop-btn">Continue Shopping</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
