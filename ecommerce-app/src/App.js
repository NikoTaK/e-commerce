import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
      <Router>
        <div className="App">
          <header>
            <h1>My E-Commerce Store</h1>
            <nav>
              <Link to="/">Products</Link>
              <Link to="/cart">Cart ({cart.length})</Link>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
