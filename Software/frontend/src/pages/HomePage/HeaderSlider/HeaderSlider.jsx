import React from 'react';
import "./HeaderSlider.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const HeaderSlider = () => {
    
    const navigate = useNavigate();
    function handleClick(id) {
        navigate(`/product/${id}`);
    }
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider-content overflow-x-hidden'>
                    <Slider {...settings}>
                        <div className='slider-item'>
                            <img src="/nike-just-do-it.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")}/>
                            <div className="description">
                                <h3 className='subtitle'>Comming soon</h3>
                                <h1 className='title russo-one-regular'>NIKE AIR MAX DN</h1>
                                <h3 className='body'>The next generation of Air technology launches on March 26th. Preview the full lineup of colourways now.</h3>
                            </div>
                        </div>
                        <div className='slider-item'>
                            <img src="/nike-1.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")}/>
                            <div className="description">
                                <h1 className='title anton-regular'>Maxxed Out motion</h1>
                                <h3 className='body'>Our Dynamic Air unit system features 2 sets of dual-pressure tubes. With the firmest amount of pressure in the heel and the softest amount of pressure towards your midfoot, the air levels shift within each set for a smooth transition as you step.</h3>
                            </div>
                        </div>
                        <div className='slider-item'>
                            <img src="/nike-2.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")}/>
                            <div className="description">
                                <h1 className='title anton-regular'>Maxxed Out energy</h1>
                                <h3 className='body'>
                                    The Nike Air Max Dn is a shoe built for movement. Performance-level bounce energises your every move.
                                    After all, who said going to a concert isn't a sport?
                                </h3>
                            </div>
                        </div>
                        <div className='slider-item'>
                            <img src="/nike-3.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")}/>
                            <div className="description">
                                <h1 className='title anton-regular'>Maxxed Out comfort</h1>
                                <h3 className='body'>
                                    The Air Max Dn works for any style. Giving you support through dynamic cushioning and a breathable upper, it's a shoe that moves with your body—not against it.
                                </h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HeaderSlider