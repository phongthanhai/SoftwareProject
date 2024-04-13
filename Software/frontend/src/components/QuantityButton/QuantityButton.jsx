import React, { useContext, useEffect, useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import { GlobalContext } from '../../context/AppContext';
import './QuantityButton.css'
const QuantityButton = () => {
  // Changed initial state to string '1'
  const { productQuantity, setProductQuantity } = useContext(GlobalContext)
  function handleIncrease() {
    setProductQuantity((prevQuantity) => {
      const newValue = parseInt(prevQuantity) + 1;
      return newValue.toString();
    });
  }

  function handleDecrease() {
    setProductQuantity((prevQuantity) => {
      const newValue = parseInt(prevQuantity) - 1;
      return newValue < 1 ? '1' : newValue.toString();
    });
  }

  function handleChange(event) {
    const value = event.target.value;
    if (value === '')
      setProductQuantity('')
    else if (productQuantity === '' && parseInt(value[value.length - 1]) == 0)
      setProductQuantity('')
    else if (!isNaN(parseInt(value[value.length - 1])))
      setProductQuantity(parseInt(value));

  }
  useEffect(() => {
    setProductQuantity('1')
  }, [])
  return (
    <div className='qty-input-bar'>
      <button className='qty-btn' onClick={() => handleDecrease(product)}>
        <FiMinus />
      </button>
      <input
        type="text"
        value={product.qty}
        role="spinbutton"
        aria-live="assertive"
        aria-valuenow={product.qty}
      />
      <button className='qty-btn' onClick={() => handleIncrease(product)}>
        <IoAdd />
      </button>
    </div>
  );
};

export default QuantityButton;
