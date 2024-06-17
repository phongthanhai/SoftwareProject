import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './UpdateForm.css'; // Your UpdateForm styles

const UpdateForm = ({ formData, onCancel, onSubmit }) => {
    const [formValues, setFormValues] = useState(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleDateChange = (date) => {
        setFormValues({ ...formValues, releaseDate: date });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormValues({ ...formValues, image: file });

        // Handle image preview if needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation if necessary
        onSubmit(formValues); // Pass form data to parent component
    };

    return (
        <div className="update-form-container">
            <h2>Edit Product</h2>
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
                    />
                </label>

                {/* Add other input fields as needed */}

                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
