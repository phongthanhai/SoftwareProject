import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, Row } from 'react-bootstrap';
import { GlobalContext } from '../../context/AppContext';
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import { data } from '../../data/data'
const HomePage = () => {
    const { products, setProducts, isLoading, setIsLoading } = useContext(GlobalContext)


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setIsLoading(true);
    //             const res = await axios.get('https://fakestoreapi.com/products')
    //             .then(res => {
    //                 setIsLoading(false);
    //                 setProducts(res.data);
    //             });
    //         } catch (e) {
    //             setIsLoading(false); // Stop loading in case of error
    //             console.error(e);
    //         }
    //     }
    //     fetchData();
    // }, [])

    
    return (
        <>
            <Container>
                HOMEPAGE
            </Container>
        </>

    )
}

export default HomePage