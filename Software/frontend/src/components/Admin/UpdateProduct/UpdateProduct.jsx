import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import UpdateProductTable from "./UpdateProductTable.jsx";
import UpdateForm from "./UpdateForm.jsx";
import "./UpdateProduct.css";

const UpdateProduct = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product for editing

    const PAGE_SIZE = 5;

    // Function to fetch products from API with pagination
    const fetchProducts = async (page, size, query) => {
        try {
            // Implement your fetch logic here
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setCurrentPage(1);
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    // Function to handle edit click
    const handleEditProduct = (product) => {
        setSelectedProduct(product);
    };

    // Function to handle cancel edit
    const handleCancelEdit = () => {
        setSelectedProduct(null);
    };

    // Function to handle form submission
    const handleUpdateProduct = async (updatedProduct) => {
        try {
            // Implement your update product API call here
            console.log("Updating product:", updatedProduct);
            // Example: await api.put("/updateProduct", updatedProduct, { headers });
            // After successful update, fetch updated product list
            fetchProducts();
            setSelectedProduct(null); // Clear selected product after update
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div className="update-product-container">
            {!selectedProduct && ( // Render Searchbar only if selectedProduct is null
                <div className="search-bar-container">
                    <Searchbar onSearch={handleSearch} />
                </div>
            )}
            <div className="product-table-container">
                {!selectedProduct ? (
                    <UpdateProductTable
                        products={products}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        onEdit={handleEditProduct} // Pass edit handler to table
                    />
                ) : (
                    <UpdateForm
                        formData={selectedProduct}
                        onCancel={handleCancelEdit}
                        onSubmit={handleUpdateProduct}
                    />
                )}
            </div>
        </div>
    );
};

export default UpdateProduct;
