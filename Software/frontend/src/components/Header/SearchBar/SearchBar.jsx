import React from 'react'
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import './Searchbar.css'
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    function handleSubmit(event) {
        event.preventDefault();
        if(query) {
            setQuery("")
            navigate(`/search/${query}`);
        }
    }
    return (
        <div className="search-form">
            <form className='search-bar' onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    />
                <button type='submit' ><CiSearch /></button>
            </form>
        </div>
    )
}

export default SearchBar