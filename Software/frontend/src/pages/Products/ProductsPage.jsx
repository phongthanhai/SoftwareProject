import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import Sidebar from './Sidebar/Sidebar'
import Sortbar from './Sortbar/Sortbar';
import Loader from '../../components/Loader/Loader'
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const ProductsPage = () => {
    const navigate = useNavigate();
    const { query, category} = useParams();
    const [total, setTotal] = useState(null);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [radioResetButtonDisabled, setRadioResetButtonDisabled] = useState(true);
    const [sortType, setSortType] = useState(null);
    const [sortByOption, setSortByOption] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(20);
    let params = {};

    const fetchShoes = async (params) => {
        try {
            const response = await api.get("/product", {
                params: {
                    page: currentPage,
                    size: size,
                    ...params,
                    sortType: sortType
                }
            });
            setProducts(response.data.data);
            setFilteredProducts(response.data.data);
            setTotal(response.data.total);
        } catch (err) {
            console.log(err);
        }
    };

    // Get products according to page
    const handlePageClick = async (event, value) => {
        let page = value;
        setCurrentPage(value - 1);
        navigate(`?page=${page-1}`);
    }
       // Check if search or select by category
    function getParams() {
        switch (category) {
            case "brand":
                params = { brand: query };
                break;
            case "gender":
                params = { gender: query };
                break;
            default:
                params = { name: query };
        }
    }
    useEffect(() => {
        setSortByOption(true);
        setSortType(null);
        setCurrentPage(0);
        getParams();
        fetchShoes(params);
    }, [query, category]);
    useEffect(() => {
        getParams()
        fetchShoes(params);
    }, [currentPage]);
    useEffect(() => {
        setCurrentPage(0);
        getParams()
        fetchShoes(params);
    }, [sortType])

    // ----------- Radio Filtering -----------
    const handleBrandChange = (event) => {
        let newBrand = event.target.value;
        setSelectedBrand(newBrand);
        setRadioResetButtonDisabled(false)
        filteredData(selectedPrice, selectedColor, newBrand, selectedGender)
    };
    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
        setRadioResetButtonDisabled(false)
        filteredData(selectedPrice, selectedColor, selectedBrand, selectedGender)

    };
    const handleColorChange = (event) => {
        let newColor = event.target.value
        setSelectedColor(newColor);
        setRadioResetButtonDisabled(false)
        filteredData(selectedPrice, newColor, selectedBrand, selectedGender)

    };
    const handleGenderChange = (event) => {
        let newGender = event.target.value
        setSelectedGender(newGender);
        setRadioResetButtonDisabled(false)
        filteredData(selectedPrice, selectedColor, selectedBrand, newGender)

    };

    function filteredData(selectedPrice, selectedColor, selectedBrand, selectedGender) {
        let filteredProducts = products;
        if (selectedColor) {
            filteredProducts = filteredProducts.filter(
                ({ colorway }) => colorway.toLowerCase().includes(selectedColor)
            );
        }
        if (selectedBrand) {
            filteredProducts = filteredProducts.filter(
                ({ brand }) => brand === selectedBrand
            );
        }
        console.log(filteredProducts);
        if (selectedGender) {
            filteredProducts = filteredProducts.filter(
                ({ gender }) => gender === selectedGender
            );
        }

        setFilteredProducts(filteredProducts);
    }
    function handleResetRadio() {
        setRadioResetButtonDisabled(true)
        const allRadioButtons = document.querySelectorAll('.sidebar-radios');
        allRadioButtons.forEach(value => value.checked = false);
        setSelectedBrand(null)
        setSelectedColor(null)
        setSelectedGender(null)
        setSelectedPrice(null)
        filteredData();
    }
    function handleSortChange(event) {
        setSortByOption(false);
        console.log(event.target.value);
        setSortType(event.target.value);
    }
    return (
        <>
            {total === 0 ? <div>no product found</div> : products.length === 0 ? <Loader /> : (
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
                        {filteredProducts.length === 0 ? <Col md={10}><h1>No products found</h1></Col> : (<Col md={10}>
                            <Row>
                                {category ? <span>{category}: {query}</span> : <span>Search result for '{query}':</span>}

                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Row>
                                        <Stack spacing={2}>
                                            <Pagination count={Math.ceil(total / size)} page={currentPage+1 ? currentPage + 1 : 1} shape="rounded" onChange={handlePageClick}/>
                                        </Stack>
                                        {/* Items count: {result.length} */}
                                    </Row>
                                </Col>
                                <Col md={2}><Sortbar sortByOption={sortByOption} handleSortChange={handleSortChange} /></Col>

                            </Row>
                            <Row>
                                <Row>
                                    {filteredProducts.map(product =>
                                        <ProductCard key={product.id} product={product} />
                                    )}
                                </Row>
                            </Row>
                        </Col>)}

                    </Row>
                </Container>)}
        </>

    )
}

export default ProductsPage