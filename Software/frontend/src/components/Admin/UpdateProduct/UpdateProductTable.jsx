import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import "./UpdateProductTable.css";
import api from "../../../api/axiosConfig.jsx";
import Loader from "../../Loader/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";

const UpdateProductTable = ({ products, query, onEdit }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(null);

    const PAGE_SIZE = 5;

    const fetchProducts = async () => {
        try {
            const response = await api.get("/product", {
                params: {
                    page: currentPage,
                    size: 5,
                    name: query
                }
            });
            setProducts(response.data.data);
            setTotal(response.data.total);

            setTimeout(() => {
                setLoading(false);
            }, 1000); // Minimum loader display time of 1 second
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [products, query, currentPage]);

    const handlePageClick = async (event, value) => {
        let page = value;
        setCurrentPage(value - 1);
        navigate(`?page=${page - 1}`);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="update-product-table">
                    <h2>Update Product Table</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ width: "30%" }}>Product Name</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Brand</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Colorway</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Gender</TableCell>
                                    <TableCell align="left" style={{ width: "20%" }}>Release Date</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Release Year</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Retail Price</TableCell>
                                    <TableCell align="left" style={{ width: "10%" }}>Discounted Price</TableCell>
                                    <TableCell align="left" style={{ width: "30%" }}>Product Photo</TableCell>
                                    <TableCell align="left" style={{ width: "20%" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {product.map((product) => (
                                    <TableRow key={product.name}>
                                        <TableCell component="th" scope="row" style={{ width: "30%" }}>
                                            {product.name}
                                        </TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.brand}</TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.colorway}</TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.gender}</TableCell>
                                        <TableCell align="left" style={{ width: "20%" }}>{product.releaseDate}</TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.releaseYear}</TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.retailPrice}</TableCell>
                                        <TableCell align="left" style={{ width: "10%" }}>{product.discountPrice}</TableCell>
                                        <TableCell align="left" style={{ width: "30%" }}>
                                            <img src={product.image.original} alt={product.name}
                                                 style={{ maxWidth: "100%", maxHeight: "auto" }} />
                                        </TableCell>

                                        <TableCell align="left" style={{ width: "20%" }}>
                                            <FaPenToSquare onClick={() => onEdit(product)} className="edit-icon" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <div className="pagination-container">
                        <Pagination
                            count={Math.ceil(total / 5)}
                            page={currentPage + 1 ? currentPage + 1 : 1}
                            onChange={handlePageClick}
                            sx={{
                                '& .MuiPaginationItem-root': {
                                    minWidth: 'unset',
                                    padding: '2rem',
                                    margin: '0 3px',
                                },
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateProductTable;
