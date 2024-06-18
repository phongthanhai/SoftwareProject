import React from 'react';
import './PurchasedItem.css';
import { useNavigate } from 'react-router-dom';
const PurchasedItem = (props) => {
  const navigate = useNavigate();
  console.log(props.product.productId);
  var item = props.product;
  ;

  return (
    <div className="product-review-container">
      
      <div className="product-wrapper">     
        <img class="item-image" src={item.imageUrl.original} alt={item.productName} onClick={() => navigate(`/product/${item.productId}`)}/>
      
        <div className="product-details" onClick={() => navigate(`/product/${item.productId}`)}>
          <h4 class="item-name">{item.productName}</h4>
          <p>Price: {item.discountPrice}</p>
          <p>Quantity: {item.quantity}</p>
          
        </div>
        
      </div> 
      <button className="review-button" onClick={() => navigate(`/product/review/${item.productId}`)}>Write a Review</button>
    </div>
  );
};

export default PurchasedItem;
