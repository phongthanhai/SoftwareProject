import React from 'react'
import { sliderData } from './SliderData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.css'
import { useNavigate } from 'react-router-dom';
const Slider = ({relatedProducts}) => {
    const navigate = useNavigate();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='shoe-carousel-container'>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {relatedProducts.map((shoe) => {
                    return (
                        <div className="slider" key={shoe.id}>
                            <img
                                src={shoe.image.original}
                                alt="shoe"
                                onClick={() => {navigate(`/product/${shoe.id}`);  }} 
                                style={{cursor:'pointer'}}/>
                            <span>{shoe.name}</span>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    )
}

export default Slider