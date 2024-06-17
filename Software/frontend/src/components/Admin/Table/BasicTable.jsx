import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Loader from "../../Loader/Loader.jsx"; // Placeholder for Loader component
import "./Table.css";
import api from '../../../api/axiosConfig.jsx';

const PAGE_SIZE = 10; // Assuming 10 items per page

const makeStyle = (status) => {
    let style = {
        background: "#59bfff", // Default background color for unknown statuses
        color: "white", // Default text color
    };

    switch (status) {
        case 1: // Approved
            style.background = "rgb(145 254 159 / 47%)";
            style.color = "green";
            break;
        case 2: // Delivery
            style.background = "#FFD700"; // Gold
            style.color = "black";
            break;
        case 3: // Terminated
            style.background = "#FF6347"; // Tomato
            style.color = "white";
            break;
        case 4: // Reject
            style.background = "#B22222"; // Firebrick
            style.color = "white";
            break;
        default:
            break;
    }

    return style;
};

const getStatusText = (status) => {
    switch (status) {
        case 1:
            return "Approved";
        case 2:
            return "Delivery";
        case 3:
            return "Terminated";
        case 4:
            return "Reject";
        default:
            return "Unknown";
    }
};

const BasicTable = () => {
    const [currentPage, setCurrentPage] = useState(0); // Start with page 0
    const [rows, setRows] = useState([]); // Initialize rows state as an empty array
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        fetchData(currentPage); // Initial fetch of data when component mounts
    }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const response = await api.get(
                `/admin/order?page=0&size=20`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            setRows(response.data); // Set rows state with data fetched from API
            // Extract total pages from response headers or response itself if available
            const totalPagesFromResponse = response.headers["x-total-pages"];
            setTotalPages(totalPagesFromResponse || 0);
            setError(null); // Reset error state on successful fetch
        } catch (error) {
            console.error("Error fetching orders:", error);
            setError(error.response?.data?.message || "Something went wrong."); // Handle specific error messages from API
        } finally {
            setLoading(false); // Ensure loading indicator is turned off after request completes
        }
    };

    useEffect(() => {
        fetchData(currentPage); // Initial fetch of data when component mounts
    }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage - 1); // Adjust page number to 0-based index for API
    };

    if (loading) {
        return <Loader />; // Display loader while data is being fetched
    }

    return (
        <div className="Table">
            <h2>Recent Orders</h2>
            {error && <p className="error-message">{error}</p>}
            <TableContainer
                component={Paper}
                style={{
                    boxShadow: "0px 13px 20px 0px #80808029",
                    overflowY: "scroll",
                    minHeight: "270px",
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell align="left">Order ID</TableCell>
                            <TableCell align="left">Address ID</TableCell>
                            <TableCell align="left">Vat</TableCell>
                            <TableCell align="left">Created At</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody style={{ color: "white" }}>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="left">{row.orderId}</TableCell>
                                <TableCell align="left">{row.addressId}</TableCell>
                                <TableCell align="left">{row.vat}</TableCell>
                                <TableCell align="left">{row.createAt}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>
                                        {getStatusText(row.status)}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="pagination-container">
                <Pagination
                    count={totalPages}
                    page={currentPage + 1} // Display current page correctly in pagination
                    onChange={handleChangePage}
                    sx={{
                        "& .MuiPaginationItem-root": {
                            minWidth: "unset", // Unset the minimum width
                            padding: "2rem", // Adjust padding as needed
                            margin: "0 3px", // Adjust margin as needed
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default BasicTable;
