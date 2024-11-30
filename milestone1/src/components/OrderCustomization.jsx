import React, { useState } from 'react';
import '../styles/OrderCustomization.css';

function OrderCustomization({ onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [extraCheese, setExtraCheese] = useState(false);
  const [olives, setOlives] = useState(false);
  const [addedMessage, setAddedMessage] = useState('');

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddOnChange = (e) => {
    if (e.target.name === 'extraCheese') {
      setExtraCheese(e.target.checked);
    } else if (e.target.name === 'olives') {
      setOlives(e.target.checked);
    }
  };

  const handleAddToCart = (dish) => {
    onAddToCart(dish);
    setAddedMessage(`${dish} has been added to your cart!`);

    setTimeout(() => {
      setAddedMessage('');
    }, 2000);
  };

  return (
    <div className="customization-container">
      <h2>Customize Your Order</h2>
      <div className="customization-options">
        <label>
          Size:
          <select value={selectedSize} onChange={handleSizeChange}>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>

        <label>
          Add-ons:
          <input
            type="checkbox"
            name="extraCheese"
            checked={extraCheese}
            onChange={handleAddOnChange}
          /> Extra Cheese
          <input
            type="checkbox"
            name="olives"
            checked={olives}
            onChange={handleAddOnChange}
          /> Olives
        </label>
      </div>

      <div className="menu-images">
        <h3>Choose Your Dish</h3>
        <div className="menu-item">
          <img src="https://www.fluentin3months.com/wp-content/uploads/2021/09/paella.jpg" alt="Paella Valenciana" />
          <p>Paella valenciana</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('Paella valenciana')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/54/e8/02/veggie-burger.jpg" alt="Vegan Delight" />
          <p>Vegan Delight</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('Vegan Delight')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="http://thesaraproject.files.wordpress.com/2014/04/cake-page-0.jpg" alt="strawbery Cake" />
          <p>strawbery Cake</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('strawbery Cake')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" alt="Burger" />
          <p>burger</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('burger')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://cdn.tasteatlas.com//images/dishes/0d08870dcb86433d99f4262692f8087b.jpg?w=905&h=510" alt="Filet Mignon" />
          <p>Filet Magnon</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('Filet Magnon')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://wallup.net/wp-content/uploads/2017/11/22/371886-food-pizza.jpg" alt="Mediterranean" />
          <p>Mediterranean</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('Mediterranean')}>Add to Cart</button>
        </div>
        <div className="menu-item">
          <img src="https://pizzavitals.com/wp-content/uploads/2023/01/pizza-3303388_960_720.jpg.webp" alt="Ratatouille" />
          <p>Ratatouille</p>
          <button className="add-to-cart" onClick={() => handleAddToCart('Ratatouille')}>Add to Cart</button>
        </div>
      </div>

      {addedMessage && (
        <div className="added-message">
          {addedMessage}
        </div>
      )}
    </div>
  );
}

export default OrderCustomization;





