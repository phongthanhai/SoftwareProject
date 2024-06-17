import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './Searchbar.css';

const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <div className="search-form">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button type="submit">
                    <CiSearch />
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
