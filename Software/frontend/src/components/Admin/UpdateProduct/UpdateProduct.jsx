import React from "react";
import Searchbar from "../Searchbar/Searchbar.jsx";
import UpdateProductTable from "./UpdateProductTable.jsx";

const UpdateProduct = () =>{
    return(
        <div className="update-product">
            <div className="search-bar-container">
                <Searchbar />
            </div>

            <div className="Table">
                <UpdateProductTable />
            </div>

        </div>
    );
}

export default UpdateProduct;