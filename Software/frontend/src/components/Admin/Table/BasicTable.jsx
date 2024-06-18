import React, { useState, useEffect } from "react";
import api from "../../../api/axiosConfig.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Loader from "../../Loader/Loader.jsx";
import "./Table.css";
import api from '../../../api/axiosConfig.jsx';
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 5;

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
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [rows, setRows] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total,setTotal] = useState(0);

    const fetchData = async (page) => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
<<<<<<< HEAD
            const response = await api.get(
                `/admin/order?page=0&size=20`,
=======
            const response = await api.get("/admin/order", {
                params: {
                    page: page,
                    size: PAGE_SIZE,
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRows(response.data);
            setTotal(response.data.total);
            const totalPagesFromResponse = response.headers["x-total-pages"];
            setTotalPages(totalPagesFromResponse || 0);
            setError(null);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setError(error.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handlePageClick = (event, value) => {
        let page = value - 1; // Adjusting page number for 0-based index
        setCurrentPage(page);
        navigate(`?page=${page}`);
    };

    const token = localStorage.getItem("token");

    const handleStatusChange = async (orderId, status) => {
        try {
            const response = await api.put(
                `/admin/order`,
                null,
>>>>>>> f84e3954c1588da71eadb673b36a85eb624b9b5e
                {
                    params: {
                        orderId: orderId,
                        status: status
                    },
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            console.log('Order status updated successfully', response.data);
            updateRowStatus(orderId, status);
        } catch (error) {
            console.error('Error updating order status', error);
        }
    };

    const updateRowStatus = (orderId, status) => {
        setRows((prevRows) =>
            prevRows.map((row) =>
                row.orderId === orderId ? { ...row, status: parseInt(status) } : row
            )
        );
    };



    if (loading) {
        return <Loader />;
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
                                <TableCell>
                                    <select
                                        value={row.status}
                                        onChange={(e) => handleStatusChange(row.orderId, e.target.value)}
                                    >
                                        <option value="1">{getStatusText(1)}</option>
                                        <option value="2">{getStatusText(2)}</option>
                                        <option value="3">{getStatusText(3)}</option>
                                        <option value="4">{getStatusText(4)}</option>
                                    </select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="pagination-container">
                <Pagination
                    count={Math.ceil(30 / 5)}
                    page={currentPage + 1 ? currentPage + 1 :1}
                    onChange={handlePageClick}
                    sx={{
                        "& .MuiPaginationItem-root": {
                            minWidth: "unset",
                            padding: "2rem",
                            margin: "0 3px",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default BasicTable;
