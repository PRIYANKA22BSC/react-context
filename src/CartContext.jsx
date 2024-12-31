import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const increaseQty = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
