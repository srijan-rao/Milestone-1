import React from 'react';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', description: 'Classic cheese pizza', price: '$12' },
  { id: 2, name: 'Caesar Salad', description: 'Fresh greens with Caesar dressing', price: '$8' },
  { id: 3, name: 'Chocolate Cake', description: 'Rich chocolate dessert', price: '$6' },
];

function Menu() {
  return (
    <div className="container">
      <h2>Our Menu</h2>
      <div>
        {menuItems.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
