import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import DeleteProductTable from "./DeleteProductTable.jsx";
import api from "../../../api/axiosConfig";
import "./DeleteProduct.css";

const DeleteProduct = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const PAGE_SIZE = 5;

    // Function to fetch products from API with pagination
    const fetchProducts = async (page, size, query) => {
        try {

        } catch (error) {

        }
    };

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setCurrentPage(1);
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="list-table">
            <div className="search-bar-container">
                <Searchbar onSearch={handleSearch} />
            </div>
            <div className="product-table-container">
                <DeleteProductTable
                    products={products}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default DeleteProduct;
