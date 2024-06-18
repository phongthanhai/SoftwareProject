import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './UpdateForm.css';
import api from "../../../api/axiosConfig.jsx";

const UpdateForm = ({ productId, onCancel, onSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        brand: '',
        colorway: '',
        gender: '',
        releaseDate: null,
        releaseYear: '',
        retailPrice: '',
        discountPrice: '',
        image: '',
        story: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (productId) {
            fetchProductData(productId);
        }
    }, [productId]);

    const fetchProductData = async (productId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await api.get(`/admin/updateProduct`, {
                params:{
                    'productId' : productId
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const productData = response.data.data;
            console.log(productData);
            setFormValues(productData);
        } catch (error) {
            console.error('Error fetching product data:', error.message);
            alert('Failed to fetch product data. Please try again later.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormValues({ ...formValues, releaseDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormDataChanged()) {
            alert('Cannot Update Data: Data is not changed.');
            return;
        }

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            alert('Cannot Update Data: Please fill in the required fields.');
            return;
        }

        // Reset errors state
        setErrors({});

        try {
            const token = localStorage.getItem('token');
            await api.put('/admin/updateProduct', formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            // Handle success
            onSubmit(formValues);
            alert('Product updated successfully!');
        } catch (error) {
            console.error('Error updating product:', error.message);
            alert('Failed to update product. Please try again later.');
        }
    };

    // Function to check if form data has changed
    const isFormDataChanged = () => {
        return JSON.stringify(formValues) !== JSON.stringify({});
    };

    // Function to validate form fields
    const validateForm = () => {
        let errors = {};

        if (!formValues.name) {
            errors.name = 'Product name is required.';
        }
        if (!formValues.brand) {
            errors.brand = 'Brand is required.';
        }
        if (!formValues.colorway) {
            errors.colorway = 'Colorway is required.';
        }
        if (!formValues.gender) {
            errors.gender = 'Gender is required.';
        }
        if (!formValues.retailPrice) {
            errors.retailPrice = 'Retail price is required.';
        }
        if (!formValues.releaseDate) {
            errors.releaseDate = 'Release date is required.';
        }

        return errors;
    };

    return (
        <div className="update-form-container">
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <label htmlFor="name">
                    <span className="form-label">Product Name <span className="required">(*)</span></span>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Enter product name..."
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>

                <label htmlFor="brand">
                    <span className="form-label">Brand <span className="required">(*)</span></span>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formValues.brand}
                        onChange={handleChange}
                        placeholder="Enter brand..."
                        required
                    />
                    {errors.brand && <span className="error">{errors.brand}</span>}
                </label>

                <label htmlFor="colorway">
                    <span className="form-label">Colorway <span className="required">(*)</span></span>
                    <input
                        type="text"
                        id="colorway"
                        name="colorway"
                        value={formValues.colorway}
                        onChange={handleChange}
                        placeholder="Enter colorway..."
                        required
                    />
                    {errors.colorway && <span className="error">{errors.colorway}</span>}
                </label>

                <label htmlFor="gender">
                    <span className="form-label">Gender <span className="required">(*)</span></span>
                    <select
                        id="gender"
                        name="gender"
                        value={formValues.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Unisex">Unisex</option>
                    </select>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </label>

                <label htmlFor="releaseDate">
                    <span className="form-label">Release Date <span className="required">(*)</span></span>
                    <br />
                    <DatePicker
                        id="releaseDate"
                        name="releaseDate"
                        selected={formValues.releaseDate}
                        onChange={handleDateChange}
                        dateFormat="MM/dd/yyyy"
                        className="date-picker"
                        required
                    />
                    {errors.releaseDate && <span className="error">{errors.releaseDate}</span>}
                </label>

                <label htmlFor="releaseYear">
                    <span className="form-label">Release Year <span className="required">(*)</span></span>
                    <input
                        type="number"
                        id="releaseYear"
                        name="releaseYear"
                        value={formValues.releaseYear}
                        onChange={handleChange}
                        placeholder="Enter release year..."
                        required
                    />
                </label>

                <label htmlFor="retailPrice">
                    <span className="form-label">Retail Price <span className="required">(*)</span></span>
                    <input
                        type="number"
                        id="retailPrice"
                        name="retailPrice"
                        value={formValues.retailPrice}
                        onChange={handleChange}
                        placeholder="Enter retail price..."
                        required
                    />
                    {errors.retailPrice && <span className="error">{errors.retailPrice}</span>}
                </label>

                <label htmlFor="discountPrice">
                    <span className="form-label">Discounted Price<span className="required">(*)</span></span>
                    <input
                        type="number"
                        id="discountPrice"
                        name="discountPrice"
                        value={formValues.discountPrice}
                        onChange={handleChange}
                        placeholder="Enter discounted price..."
                    />
                </label>

                <label htmlFor="story">
                    <span className="form-label">Product Story</span>
                    <textarea
                        id="story"
                        name="story"
                        value={formValues.story}
                        onChange={handleChange}
                        placeholder="What is the story behind your shoe?"
                        rows={4}
                        className="story-textarea"
                    />
                </label>

                <label htmlFor="image">
                    <span className="form-label">Product Image URL <span className="required">(*)</span></span>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formValues.image}
                        onChange={handleChange}
                        placeholder="Enter product image URL..."
                        required
                    />
                    {errors.image && <span className="error">{errors.image}</span>}
                </label>


                <div className="form-buttons">
                    <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="update-button">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateForm;
