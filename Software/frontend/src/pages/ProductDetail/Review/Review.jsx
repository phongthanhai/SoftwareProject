import React from 'react'
import { Row } from 'react-bootstrap'
import './Review.css'
const UserReview = ({ username, rating, date, title, deliveryFeedback }) => {
  return (
    <Row className="reviewContainer">
      <div className="header">
        <div className="reviewTitle">
          <span>{title}</span>
        </div>
        <div className="dateVariation">
          <span>{date}</span>
        </div>
      </div>
      
      <div className="rating" >
        {'★'.repeat(rating)}
      </div>

      <div className="deliveryFeedback">
        {deliveryFeedback}
      </div>
      <div className="userInfo">
        <span className="username">{username}</span>
      </div>
    </Row>
  );
}

export default UserReview