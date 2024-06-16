import React from 'react';
import './OrderItem.css';
const OrderItem = ({ product }) => {
  return (
    <div className="product-review-container">
      
      <div className="product-wrapper">     
        <img class="product-image" src={product.img} alt={product.name} />
      
        <div className="product-details">
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Size: {product.size}</p>
          <p>Gender: {product.gender}</p>
          <p>Purchase date: {product.date}</p>
        </div>
        
      </div> 
    </div>
  );
};

export default OrderItem;
