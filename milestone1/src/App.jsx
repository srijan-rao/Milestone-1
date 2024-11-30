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
import './styles/Home.css'; 

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


  const Home = () => {
    return (
      <div className="home-container">
        <div className="welcome-section">
          <h2>Welcome to Foodi Havan!</h2>
          <p>Your journey to the finest culinary delights begins here...</p>
        </div>

        <div className="promotions-section">
          <h3>Seasonal Specials</h3>
          <div className="promotion-cards">
            <div className="promotion-card">
              <img
                src="https://www.fluentin3months.com/wp-content/uploads/2021/09/paella.jpg"
                alt="Paella Valenciana"
              />
              <h4>Paella Valenciana</h4>
              <p>Enjoy our classic Paella Valenciana, a feast for the senses!</p>
            </div>
            <div className="promotion-card">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/12/54/e8/02/veggie-burger.jpg"
                alt="Vegan Delight"
              />
              <h4>Vegan Delight</h4>
              <p>A mouthwatering delight for all our vegan friends. Healthy and flavorful!</p>
            </div>
            <div className="promotion-card">
              <img
                src="http://thesaraproject.files.wordpress.com/2014/04/cake-page-0.jpg"
                alt="Strawberry Cake"
              />
              <h4>Strawberry Cake</h4>
              <p>Perfect for dessert fresh, sweet, and irresistible!</p>
            </div>
          </div>
        </div>
      </div>
    );
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

