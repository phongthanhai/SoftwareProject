import React from 'react';
import './Popup.css';

const Popup = ({ show, newProduct, handleSubmit, onClose }) => {
    if (!show) {
        return null;
    }

    const handleConfirm = () => {
        handleSubmit();
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <h3>Confirm Product Creation</h3>
                <p>Are you sure you want to create this product?</p>
                <div className="popup-buttons">
                    <button className="confirm" onClick={handleConfirm}>Confirm</button>
                    <button className="cancel" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
