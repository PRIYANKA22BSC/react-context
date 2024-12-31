import React from 'react';
import './App.css';
import Products from './products.jsx';
import Cart from './cart.jsx';
import { useCart } from './CartContext.jsx';

export default function Shop() {
  const { cartItems, setCartItems } = useCart();

 const addToCart = (item) => {
   /* setCartItems((prevItems) => [...prevItems, { ...item, qty: 1 }]);*/
   setCartItems((prevItems) => {
      
    const existItem = prevItems.find((cartItem) => cartItem.id === item.id);

    if (existItem) {
      return prevItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 } 
          : cartItem
      );
    } else {
     
      return [...prevItems, { ...item, qty: 1 }];
    }
   });



  };
  let items = [
    { id: '1', name: 'Knee-Hi', price: '400', img: 'image/1.jpg' },
    { id: '2', name: 'Casual Sneakers', price: '399', img: 'image/2.jpg' },
    { id: '3', name: 'Loafers For Men', price: '450', img: 'image/3.jpg' },
    { id: '4', name: 'Stylish Casual', price: '350', img: 'image/4.jpg' },
    { id: '5', name: 'Sneakers For Women', price: '450', img: 'image/5.jpg' },
    { id: '6', name: 'Running Shoes', price: '550', img: 'image/6.jpg' },
    { id: '7', name: 'Sports shoes', price: '599', img: 'image/7.jpg' },
    { id: '8', name: 'Trending Stylish Casual', price: '450', img: 'image/8.jpg' },
    { id: '9', name: 'Walking Shoes', price: '500', img: 'image/9.jpg' }
  ];

  return (
    <div id="components-container">
      <Products items={items} addToCart={addToCart} />
      <Cart isOnShopPage />
    </div>
  );
}
