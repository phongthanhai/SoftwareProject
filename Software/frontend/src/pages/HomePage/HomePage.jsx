import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './HomePage.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import api from '../../api/axiosConfig';
import HeaderSlider from './HeaderSlider/HeaderSlider';
import { GlobalContext } from '../../context/AppContext';

const HomePage = () => {
    const brands = ['Nike', 'adidas', 'Puma', 'Jordan', 'Converse', 'ASICS'];
    const [nike, setNike] = useState([]);
    const [adidas, setAdidas] = useState([]);
    const [puma, setPuma] = useState([]);
    const [jordan, setJordan] = useState([]);
    const [converse, setConverse] = useState([]);
    const [asics, setAsics] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // const {checkIsLogIn} = useContext(GlobalContext);
    // checkIsLogIn();
    const setFunctions = [setNike, setAdidas, setPuma, setJordan, setConverse, setAsics];

    const fetchData = async () => {
        try {
            const promises = brands.map((brand, index) =>
                api.get("/product", {
                    params: {
                        page: 0,
                        size: 6,
                        brand: brand,
                        sortType: "desc"
                    }
                }).then(response => setFunctions[index](response.data.data))
            );
            await Promise.all(promises);
            setTimeout(() => {
                setLoading(false);
            }, 1000); // Minimum loader display time of 1 second
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Container className='homepage-container'>
                    <Row>
                        <HeaderSlider />
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>Nike</h1>
                    </Row>
                    <Row>
                        {nike.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>adidas</h1>
                    </Row>
                    <Row>
                        {adidas.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>Puma</h1>
                    </Row>
                    <Row>
                        {puma.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>Jordan</h1>
                    </Row>
                    <Row>
                        {jordan.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>Converse</h1>
                    </Row>
                    <Row>
                        {converse.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                    <Row>
                        <h1 className='hp-title bebas-neue-regular'>ASICS</h1>
                    </Row>
                    <Row>
                        {asics.map(product => <ProductCard key={product.id} product={product} />)}
                    </Row>
                </Container>
            )}
        </>
    );
};

export default HomePage;
