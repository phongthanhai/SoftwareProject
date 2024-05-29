import React from 'react'

const Sortbar = ({sortByOption, handleSortChange}) => {

    return (
        <div style={{height: '100%', display:'flex', alignItems:'center'}}>
            <select id="price-sort" onChange={handleSortChange} value={sortByOption ? "null" : undefined} style={{fontSize:'14px', padding:'7px 0'}}>
                {sortByOption ? <option value="null">Price</option> : null}
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Sortbar