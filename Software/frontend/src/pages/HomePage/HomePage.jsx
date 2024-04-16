import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import './HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { data } from '../../data/data'
import Loader from '../../components/Loader/Loader'
import api from '../../api/axiosConfig'
import HeaderSlider from './HeaderSlider/HeaderSlider';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            try
            {
              const response = await api.get("/product", {
                params: {
                    page: 0,
                    size: 20
                }
              });
              setProducts(response.data.data);
            } 
            catch(err)
            {
              console.log(err);
            }
          }
          fetchData();
          console.log(products);
        // setProducts(data);
    }, [])
    return (
        <>
        {products.length === 0 ? <Loader /> : (
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
                

            </Container>)}
        </>

    )
}

export default HomePage