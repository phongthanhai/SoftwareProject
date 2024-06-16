import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admin.css';
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar.jsx';
import Dash from '../../components/Admin/Dashboard/Dash.jsx';
import LoginMenu from '../../components/Admin/LoginMenu/LoginMenu.jsx';
import NewProductForm from '../../components/Admin/NewProductForm/NewProductForm.jsx';
import ListTable from '../../components/Admin/ListTable/ListTable.jsx';
import UpdateProduct from "../../components/Admin/UpdateProduct/UpdateProduct.jsx";
import DeleteProduct from "../../components/Admin/DeleteProduct/DeleteProduct.jsx";

const Admin = () => {
    return (
        <div className="admin">
            <div className="admin-container">
                <AdminSidebar />
                <Routes>
                    <Route path="/" element={<Dash />} />
                    <Route path="/createProduct" element={<NewProductForm />} />
                    <Route path="/store" element={<ListTable />} />
                    <Route path="/updateProduct" element={<UpdateProduct />} />
                    <Route path="/deleteProduct" element={<DeleteProduct />} />
                </Routes>
                <LoginMenu />
            </div>
        </div>
    );
};

export default Admin;
