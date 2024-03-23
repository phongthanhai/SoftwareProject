import React from 'react'

const Sortbar = ({sortByOption, handleSortChange}) => {
    return (
        <div>
            <select id="price-sort" onChange={handleSortChange}>
                {sortByOption && <option value="default">Price</option>}
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Sortbar