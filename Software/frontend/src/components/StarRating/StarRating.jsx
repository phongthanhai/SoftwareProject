import React from 'react'
import './StarRating.css'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const StarRating = ({ rating }) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const halfStar = Math.ceil(rating % 1);
    const emptyStars = Math.floor(maxRating - rating);
    console.log(fullStars);
    return (
        <div className="star-rating">
            <span className="rating-value">{rating}/{maxRating}</span>
            <div className="stars">

                {[...Array(fullStars).keys()].map((_, index) => (
                    <IoIosStar key={index} />
                ))}
                {[...Array(halfStar).keys()].map((_, index) => (
                    <IoIosStarHalf key={index} />
                ))}
                {[...Array(emptyStars).keys()].map((_, index) => (
                    <IoIosStarOutline key={index} />
                ))}
                
            </div>
        </div>
    );
};

export default StarRating;