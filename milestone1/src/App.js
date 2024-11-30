import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import OrderCustomization from './components/OrderCustomization';
import ShoppingCart from './components/ShoppingCart';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import FeedbackForm from './components/FeedbackForm';   
import './styles/index.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const price = getItemPrice(item);
    const newItem = { name: item, price };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const handleRemoveFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
  };

  const getItemPrice = (item) => {
    const prices = {
      'Paella valenciana': 20,
      'Vegan Delight': 15,
      'Strawberry Cake': 8,
      'Burger': 10,
      'Filet Mignon': 25,
      'Mediterranean': 12,
      'Ratatouille': 18,
    };
    return prices[item] || 0;
  };

  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
             
           
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/order-customization" element={<OrderCustomization onAddToCart={handleAddToCart} />} />
            <Route path="/shopping-cart" element={<ShoppingCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
