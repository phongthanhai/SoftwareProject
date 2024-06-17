import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ProductTable from "./ProductTable";
import api from "../../../api/axiosConfig";
import "./ListTable.css";

const ListTable = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const PAGE_SIZE = 5;

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
                <ProductTable
                    products={products}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ListTable;
