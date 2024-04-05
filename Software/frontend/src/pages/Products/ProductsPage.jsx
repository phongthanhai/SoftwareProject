import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../../context/AppContext';
import axios from 'axios';
import { data } from '../../data/data'
import Sidebar from './Sidebar/Sidebar'
import Sortbar from './Sortbar/Sortbar';
import Loader from '../../components/Loader/Loader'
import { useParams } from 'react-router-dom';
const ProductsPage = () => {
    const { query, category } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [radioResetButtonDisabled, setRadioResetButtonDisabled] = useState(true)
    const [sortByOption, setSortByOption] = useState(true)
    // Check if search or select by category
    let filteredItems;
    if (category) {
        if (category === "brand") {
            filteredItems = products.filter(
                (product) => product.brand.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        } else if (category === "gender") {
            filteredItems = products.filter(
                (product) => product.gender.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        }
    } else {
        filteredItems = products.filter(
            (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
        );
    }

    // ----------- Radio Filtering -----------
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        setRadioResetButtonDisabled(false)

    };
    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
        setRadioResetButtonDisabled(false)

    };
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
        setRadioResetButtonDisabled(false)

    };
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        setRadioResetButtonDisabled(false)
    };


    function filteredData(products, selectedPrice, selectedColor, selectedBrand, selectedGender) {
        let filteredProducts = products;
        if (query) {
            filteredProducts = filteredItems;
        }
        if (selectedPrice) {
            const [start, end] = selectedPrice.split(',').map(Number);
            filteredProducts = filteredProducts.filter(
                ({ newPrice }) =>
                    newPrice >= start && newPrice <= end
            );
        }
        if (selectedColor) {
            filteredProducts = filteredProducts.filter(
                ({ colorway }) =>
                    colorway.toLowerCase().includes(selectedColor)
            );
        }
        if (selectedBrand) {
            filteredProducts = filteredProducts.filter(
                ({ brand }) =>
                    brand === selectedBrand
            );
        }
        if (selectedGender) {
            filteredProducts = filteredProducts.filter(
                ({ gender }) =>
                    gender === selectedGender
            );
        }
        return filteredProducts;
    }
    function handleResetRadio() {
        setRadioResetButtonDisabled(true)
        const allRadioButtons = document.querySelectorAll('.sidebar-radios');
        allRadioButtons.forEach(value => value.checked = false);
        setSelectedBrand(null)
        setSelectedColor(null)
        setSelectedGender(null)
        setSelectedPrice(null)
    }
    function handleSortChange(event) {
        setSortByOption(false);
        const priceOrder = event.target.value;

        if (priceOrder === "low-to-high") {
            const sortedProducts = [...products].sort((a, b) => a.discountPrice - b.discountPrice);
            setProducts(sortedProducts);
        } else if (priceOrder === "high-to-low") {
            const sortedProducts = [...products].sort((a, b) => b.discountPrice - a.discountPrice);
            setProducts(sortedProducts);
        }
    }
    let result = filteredData(products, selectedPrice, selectedColor, selectedBrand, selectedGender);

    useEffect(() => {
        setProducts(data);
    }, [query])

    return (
        <>
            <Container>
                <Row>
                    <Col md={2}>
                        <Sidebar
                            handleBrandChange={handleBrandChange}
                            handlePriceChange={handlePriceChange}
                            handleColorChange={handleColorChange}
                            handleGenderChange={handleGenderChange}
                            category={category} />
                        <button style={{ width: '100%', padding: '1rem 0', marginTop: '2rem', }}
                            disabled={radioResetButtonDisabled}
                            onClick={handleResetRadio}>
                            CLEAR ALL
                        </button>

                    </Col>
                    {result.length === 0 ? <Col md={10}><h1>No products found</h1></Col> : (<Col md={10}>
                        <Row>
                            <Col md={10}>
                                <Row>
                                    {category ? <span>{category}: {query}</span>  : <span>Search result for '{query}':</span>}

                                    {/* Items count: {result.length} */}
                                </Row>
                            </Col>
                            <Col md={2}><Sortbar sortByOption={sortByOption} handleSortChange={handleSortChange} /></Col>

                        </Row>
                        <Row>
                            <Row>
                                {result.map(product =>
                                    <ProductCard key={product.id} product={product} />
                                )}
                            </Row>
                        </Row>
                    </Col>)}

                </Row>
            </Container>
        </>

    )
}

export default ProductsPage