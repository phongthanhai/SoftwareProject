import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import Slider from './Slider/Slider';
const HomePage = () => {

    const navigate = useNavigate();
    function handleClick(id) {
        navigate(`/product/${id}`);
    }

    return (
        <>
            <Container>
                {/* <Slider/> */}
                <Row className="shoe-poster">
                    <Row className='img-container'>
                        <img src="/nike-just-do-it.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")} />
                    </Row>
                    <Row>
                        <div className="description">
                            <h3 className='subtitle'>Comming soon</h3>
                            <h1 className='title russo-one-regular'>NIKE AIR MAX DN</h1>
                            <h3 className='body'>The next generation of Air technology launches on March 26th. Preview the full lineup of colourways now.</h3>
                        </div>
                    </Row>
                </Row>
                <Row className="shoe-poster">
                    <Row className='img-container'>
                        <img src="/nike-1.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")} />
                    </Row>
                    <Row>
                        <div className="description">
                            <h1 className='title anton-regular'>Maxxed Out motion</h1>
                            <h3 className='body'>Our Dynamic Air unit system features 2 sets of dual-pressure tubes. With the firmest amount of pressure in the heel and the softest amount of pressure towards your midfoot, the air levels shift within each set for a smooth transition as you step.</h3>
                        </div>
                    </Row>
                </Row>
                <Row className="shoe-poster">
                    <Row className='img-container'>
                        <img src="/nike-2.png" alt="" onClick={() => handleClick("6b1ebdb3-9043-492d-94bf-8ab78dccafb9")} />
                    </Row>
                    <Row>
                        <div className="description">
                            <h1 className='title anton-regular'>Maxxed Out energy</h1>
                            <h3 className='body'>
                                The Nike Air Max Dn is a shoe built for movement. Performance-level bounce energises your every move.
                                After all, who said going to a concert isn't a sport?
                            </h3>
                        </div>
                    </Row>
                </Row>
                <Row className="shoe-poster">
                    <Row className='img-container last-img'>
                        <img src="/nike-3.png" alt="" />
                    </Row>
                </Row>
                <Row>
                    <Row><h1 className='product-might-like bebas-neue-regular'>Products you might like</h1></Row>
                    <Row>
                        <Slider />

                    </Row>
                </Row>
            </Container>
        </>

    )
}

export default HomePage