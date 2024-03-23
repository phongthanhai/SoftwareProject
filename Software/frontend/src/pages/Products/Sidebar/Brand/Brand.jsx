import React from 'react'
import Sidecard from '../Sidecard/Sidecard'
const Brand = ({handleBrandChange}) => {
    const brands = ['Nike', 'adidas', 'Jordan', 'ASICS', 'Reebok', 'Converse', 'Puma', 'MSCHF'];
    return (
        <div>
            <h2>Brand</h2>
            {brands.map(brand => <Sidecard key={brand} handleChange={handleBrandChange} value={brand} title={brand} name='brand' />)}

        </div>
    )
}

export default Brand