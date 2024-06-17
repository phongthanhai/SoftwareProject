import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import './AdminSidebar.css';

import {
    FaCirclePlus,
    FaChartColumn,
    FaShopify,
    FaStore,
    FaWrench,
    FaMoneyBillTransfer,
    FaCircleXmark,
    FaCircleQuestion
} from "react-icons/fa6";

const AdminSidebar = () => {
    const [selectedOption, setSelectedOption] = useState('dashboard');
    const [isManageProductsSelected, setIsManageProductsSelected] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleManageProductsClick = () => {
        setIsManageProductsSelected(!isManageProductsSelected);
    };

    return (
        <div className="admin-sidebar">
            <div className="logo">
                <img src={logo} alt=""/>
                <span>Esh<span>o</span>es</span>
            </div>

            <Link to="/admin/createProduct" className="add-button">
                <div id="plus-icon">
                    <FaCirclePlus/>
                </div>
                <span id="new-product">New Product</span>
            </Link>

            <div className="sidebar-menu">
                <Link to="/admin"
                      className={`sidebar-menu-item ${selectedOption === 'dashboard' ? 'selected' : ''}`}
                      onClick={() => handleOptionClick('dashboard')}>
                    <div>
                        <FaChartColumn/>
                        <span>Dashboard</span>
                    </div>
                </Link>

                <div className={`sidebar-menu-item ${isManageProductsSelected ? 'expanded' : ''}`}
                     onClick={handleManageProductsClick}>
                    <div>
                        <FaShopify/>
                        <span>Manage Products</span>
                    </div>
                </div>

                {isManageProductsSelected && (
                    <>
                        <Link to="/admin/store"
                              className={`sidebar-menu-item ${selectedOption === 'viewAllProducts' ? 'selected' : ''}`}
                              onClick={() => handleOptionClick('viewAllProducts')}>
                            <div>
                                <FaStore/>
                                <span>View All Products</span>
                            </div>
                        </Link>

                        <Link to="/admin/updateProduct"
                              className={`sidebar-menu-item ${selectedOption === 'updateProduct' ? 'selected' : ''}`}
                              onClick={() => handleOptionClick('updateProduct')}>
                            <div>
                                <FaWrench/>
                                <span>Update Product</span>
                            </div>
                        </Link>

                        <Link to="/admin/updateProduct"
                              className={`sidebar-menu-item ${selectedOption === 'updateProductPrice' ? 'selected' : ''}`}
                              onClick={() => handleOptionClick('updateProductPrice')}>
                            <div>
                                <FaMoneyBillTransfer/>
                                <span>Update Product Price</span>
                            </div>
                        </Link>

                        <Link to="/admin/deleteProduct"
                              className={`sidebar-menu-item ${selectedOption === 'deleteProduct' ? 'selected' : ''}`}
                              onClick={() => handleOptionClick('deleteProduct')}>
                            <div>
                                <FaCircleXmark/>
                                <span>Delete Product</span>
                            </div>
                        </Link>
                    </>
                )}

                {/*
                <Link to="/admin/help"
                      className={`sidebar-menu-item ${selectedOption === 'help' ? 'selected' : ''}`}>
                    <div>
                        <FaCircleQuestion/>
                        <span>Need Help?</span>
                    </div>
                </Link>
                */}

            </div>
        </div>
    );
};

export default AdminSidebar;
