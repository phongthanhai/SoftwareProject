import React from "react";
import './Dash.css';
import Cards from "../Cards/Cards.jsx";
import Table from "../Table/BasicTable.jsx"
const Dash = () => {
    return(
        <div className="dash">
            <h1>DASHBOARD</h1>
            <Cards />
            <Table />
        </div>
    );
}

export default Dash;