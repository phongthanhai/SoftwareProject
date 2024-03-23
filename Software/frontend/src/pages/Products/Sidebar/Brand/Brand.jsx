import React from 'react'
import Sidecard from '../Sidecard/Sidecard'
const Brand = ({handleBrandChange}) => {
    const brands = ['Nike', 'adidas', 'Jordan', 'ASICS', 'Reebok', 'Converse', 'Puma', 'MSCHF'];
    return (
        <div className='sidebar-filter'>
            <h3>Brand</h3>
            {brands.map(brand => <Sidecard key={brand} handleChange={handleBrandChange} value={brand} title={brand} name='brand' />)}

        </div>
    )
}

export default Brand