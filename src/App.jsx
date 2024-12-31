import React from 'react';
import './App.css';
import Header from './header.jsx';
import Home from './home.jsx';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Header />
      <Outlet />
    </CartProvider>
  );
}

export default App;
