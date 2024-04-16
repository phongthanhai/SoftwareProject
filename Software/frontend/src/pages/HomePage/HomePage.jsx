import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import './HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import { data } from '../../data/data'
import Loader from '../../components/Loader/Loader'
import api from '../../api/axiosConfig'
import HeaderSlider from './HeaderSlider/HeaderSlider';
const HomePage = () => {
    const brands = ['Nike', 'adidas','Puma', 'Jordan', 'Converse', 'ASICS'];
    const [nike, setNike] = useState([]);
    const [adidas, setAdidas] = useState([]);
    const [puma, setPuma] = useState([]);
    const [jordan, setJordan] = useState([]);
    const [converse, setConverse] = useState([]);
    const [asics, setAsics] = useState([]);
    const setFunctions = [setNike, setAdidas, setPuma, setJordan, setConverse, setAsics];
    function setProducts(setProduct, data) {
        setProduct(data);
    }
    const fetchData = async () =>{
        try
        {
            for(var i = 0; i < brands.length; i++) {
                const response = await api.get("/product", {
                    params: {
                        page: 0,
                        size: 6,
                        brand: brands[i]
                    }
                  });
                  setProducts(setFunctions[i],response.data.data);
            }
          
        } 
        catch(err)
        {
          console.log(err);
        }
      }
    useEffect(() => {       
          fetchData();
    }, [])
    return (
        <>
        {
        nike.length === 0 && 
        puma.length === 0 && 
        jordan.length === 0 && 
        converse.length  === 0 && 
        asics.length === 0 && 
        adidas.length === 0 ? <Loader /> : (
            <Container className='homepage-container'>
                <Row>
                    <HeaderSlider />
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>Nike</h1>
                </Row>
                <Row>
                    {nike.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>adidas</h1>
                </Row>
                <Row>
                    {adidas.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>Puma</h1>
                </Row>
                <Row>
                    {puma.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>Jordan</h1>
                </Row>
                <Row>
                    {jordan.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>Converse</h1>
                </Row>
                <Row>
                    {converse.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                <Row>
                <h1 className='hp-title bebas-neue-regular'>ASICS</h1>
                </Row>
                <Row>
                    {asics.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </Row>
                

            </Container>)}
        </>

    )
}

export default HomePage