import React from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default App;
