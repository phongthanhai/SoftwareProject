import React from "react";
import { useState } from "react";
import Searchbar from "../Searchbar/Searchbar.jsx";
import {SearchResultsList} from "../Searchbar/SearchResultList.jsx";
import BasicTable from "../Table/BasicTable.jsx";
import "./ListTable.css"
import ProductTable from "./ProductTable.jsx";

function ListTable() {
    const [results, setResults] = useState([]);

    return (
        <div className="list-table">
            <div className="search-bar-container">
                <Searchbar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>


            <div className="Table">
                <ProductTable />
            </div>

        </div>
    );
}

export default ListTable;