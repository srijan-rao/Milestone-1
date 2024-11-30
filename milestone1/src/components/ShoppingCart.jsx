import React from 'react';

function ShoppingCart({ cart, onRemoveFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name} - ${item.price}</p>
            <button 
              className="remove-item" 
              onClick={() => onRemoveFromCart(item.name)}
            >
              Remove
            </button>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Total: ${total}</h3>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;


