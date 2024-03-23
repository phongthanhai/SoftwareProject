import React, { useContext, useEffect, useState } from 'react'
import './Searchbar.css'
const Searchbar = ({handleProductInputChange, query}) => {
  return (
    <div className="search-form">
      <div className='search-bar' onChange={handleProductInputChange} >
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={query}
          onChange={handleProductInputChange}
          className=""
          aria-label="Search" />
        {/* <button type='submit' ><FaSearch /></button> */}
      </div>
    </div>
  )
}

export default Searchbar