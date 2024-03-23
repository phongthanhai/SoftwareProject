import React from 'react'

const Sortbar = ({sortByOption, handleSortChange}) => {
    return (
        <div style={{height: '100%', display:'flex', alignItems:'center'}}>
            <select id="price-sort" onChange={handleSortChange} style={{fontSize:'14px', padding:'7px 0'}}>
                {sortByOption && <option value="default">Price</option>}
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Sortbar