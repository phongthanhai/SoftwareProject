import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'; // Import Link
import './NewProductForm.css';
import api from "../../../api/axiosConfig.jsx";

const NewProductForm = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        brand: '',
        colorway: '',
        gender: '',
        releaseDate: new Date(),
        releaseYear: new Date().getFullYear().toString(),
        story: '',
        retailPrice: '',
        discountPrice: '',
        image: ''
    });

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const year = newProduct.releaseDate.getFullYear().toString();
        setNewProduct(prevProduct => ({
            ...prevProduct,
            releaseYear: year
        }));
    }, [newProduct.releaseDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleDateChange = (date) => {
        setNewProduct({ ...newProduct, releaseDate: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for null or empty values
        if (
            !newProduct.name ||
            !newProduct.brand ||
            !newProduct.colorway ||
            !newProduct.gender ||
            !newProduct.retailPrice ||
            !newProduct.discountPrice ||
            !newProduct.releaseDate ||
            !newProduct.image
        ) {
            alert('Please fill out all required fields.');
            return;
        }

        try {

            await api.post('/admin/createProduct', newProduct, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            console.log('New Product saved:', newProduct);
            setIsSaved(true);
            alert('Product Saved!.');
        } catch (error) {
            console.error('Error saving product:', error);

        }
    };

    return (
        <div className="new-product-container">
            <h2>New Product Detail</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }} className="new-product-form">
                <div className="field">
                    <label htmlFor="name">
                        <span className="form-label">Product Name <span className="required">(*)</span></span>
                        <input type="text" id="name" name="name" value={newProduct.name}
                               onChange={handleChange}
                               placeholder={newProduct.name ? '' : 'Enter product name...'}/>
                    </label>
                    <label htmlFor="brand">
                        <span className="form-label">Brand <span className="required">(*)</span></span>
                        <input type="text" id="brand" name="brand" value={newProduct.brand}
                               onChange={handleChange}
                               placeholder={newProduct.brand ? '' : 'Enter brand...'}
                        />
                    </label>
                </div>

                <div className="field">
                    <label htmlFor="colorway">
                        <span className="form-label">Product Color <span className="required">(*)</span></span>
                        <input type="text" id="colorway" name="colorway" value={newProduct.colorway}
                               onChange={handleChange}
                               placeholder={newProduct.colorway ? '' : 'Product color...'}
                        />
                    </label>
                    <label htmlFor="gender">
                        <span className="form-label">Gender <span className="required">(*)</span></span>
                        <input type="text" id="gender" name="gender" value={newProduct.gender}
                               onChange={handleChange}
                               placeholder={newProduct.gender ? '' : 'Gender...'}
                        />
                    </label>
                </div>

                <label htmlFor="retailPrice">
                    <span className="form-label">Retail Price <span className="required">(*)</span></span>
                    <input type="text" id="retailPrice" name="retailPrice" value={newProduct.retailPrice}
                           onChange={handleChange}
                           placeholder={newProduct.retailPrice ? '' : 'Retail Price'}
                    />
                </label>

                <label htmlFor="discountPrice">
                    <span className="form-label">Discounted Price <span className="required">(*)</span></span>
                    <input type="text" id="discountPrice" name="discountPrice" value={newProduct.discountPrice}
                           onChange={handleChange}
                           placeholder={newProduct.discountPrice ? '' : 'Discounted Price'}
                    />
                </label>

                <label htmlFor="story">
                    <span className="form-label">Product Story</span>
                    <textarea
                        id="story"
                        name="story"
                        value={newProduct.story}
                        onChange={handleChange}
                        placeholder={newProduct.story ? '' : 'What is the story behind your shoe?'}
                        rows={4}
                        className="story-textarea"
                    />
                </label>

                <label htmlFor="releaseDate">
                    <span className="form-label">Release Date <span className="required">(*)</span></span>
                    <DatePicker
                        id="releaseDate"
                        selected={newProduct.releaseDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                    />
                </label>

                <label htmlFor="image">
                    <span className="form-label">Product Image URL <span className="required">(*)</span></span>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={newProduct.image}
                        onChange={handleChange}
                        placeholder="Enter product image URL..."
                    />
                </label>

                <button type="button" id="submit-btn" onClick={handleSubmit}>
                    Save Changes
                </button>

                {isSaved && (

                    <p className="save-message">New Product Saved! <Link to="/admin">Click Here</Link> to go to homepage!</p>
                )}
            </form>
        </div>
    );
};

export default NewProductForm;
