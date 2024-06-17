import React from 'react'
import {useNavigate } from "react-router-dom";
import './ReviewPost.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../../../components/Loader/Loader';
import './RateByStar.css';
import api from '../../../api/axiosConfig';
const Review = () => {
  //handle product info
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const getShoeData = async () => {
        try {
          const response = await api.get(`/product/${id}`);
          setProduct(response.data.product);
          console.log(response.data.product);
          setTimeout(() => {
            setLoading(false);
          }, 1000); // Loader for 1 second
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      };
      
      //handle rating value
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [submit, setSubmit] = useState(false);


    //handle change in input
    //handle title
    function handleTitleChange(event){
      const reviewTitle = event.target.value;
      setTitle(reviewTitle);
    if (reviewTitle=="" && rating==0) setSubmit(false);
    else setSubmit(true);
    }

    //handle comment
    function handleCommentChange(event){
      const reviewComment = event.target.value;
      setComment(reviewComment);
    
    }

    //post review to server
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      api.post('/product/review', {
        productId: product.id,
        title: title,
        content: comment,
        rating: rating
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(() =>{
        navigate('/member/orders')
      })
    };

    useEffect(() => {
    getShoeData();
    }, [id]);

    useEffect(() =>{
      
      console.log("submit" + submit);
    })
    
    return <>
    {loading? (<Loader />)
    :(
    <div>
      <h2 className="product-title">{product.name}</h2>
      <div className="review-container">
        
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Review Product</h3>
          <div className="rating">
            <label>Rating*</label>
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? 'on' : 'off'}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="review-title">
            <label>
              Review Title*
            </label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Summarize your review"
              />
          
          </div>
          
          <div className="review-comment">
            <label>
              Comment
            </label>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Your review about product"
              />
            
          </div>

          <button button type="submit" className="confirm-btn" disabled={!submit}>Confirm</button>
        </form>
        <div className="product-details">
          <img className="product-image" src={product.image.original} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>Retail Price: ${product.retailPrice}</p>
            <p>Colorway: {product.colorway}</p>
            <p>Gender: {product.gender}</p>
          </div>
        </div>

      </div>
    </div>
  )}
  </>
    
}

export default Review