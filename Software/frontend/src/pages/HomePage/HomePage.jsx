import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import './HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { data } from '../../data/data'

import HeaderSlider from './HeaderSlider/HeaderSlider';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data);
    }, [])
    return (
        <>
            <Container className='homepage-container'>
                <Row>
                    <HeaderSlider />
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>SEE OUR PRODUCTS</h1>
                </Row>
                <Row>
                    {products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                

            </Container>
        </>

    )
}

export default HomePage