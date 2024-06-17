import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import "./UpdateProductTable.css";
import { FaRegPenToSquare } from "react-icons/fa6";

// Function to create shoe data entries
function createData(name, brand, colorway, gender, releaseDate, releaseYear, story, retailPrice, discountPrice, image) {
    return {
        name,
        brand,
        colorway,
        gender,
        releaseDate,
        releaseYear,
        story,
        retailPrice,
        discountPrice,
        image
    };
}

// Example shoe data entries
const rows = [
    createData(
        "Nike Air Force 1 Low",
        "Nike",
        "White/Black",
        "Male",
        new Date("2023-06-15"),
        "2023",
        "The Nike Air Force 1 Low 'White/Black' remains one of the most iconic sneakers of all time.",
        120,
        110,
        "https://example.com/image1.jpg" // Example image URL
    ),
    // Add more shoe data entries as needed
];

const PAGE_SIZE = 5;

export default function UpdateProductTable() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalPageCount = Math.ceil(rows.length / PAGE_SIZE);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const visibleRows = rows.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className="Table">
            <h2>Store</h2>
            <TableContainer
                component={Paper}
                style={{
                    boxShadow: "0px 13px 20px 0px #80808029",
                    overflowY: "scroll",
                    minHeight: "270px"
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ width: "30%" }}>Product Name</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}>Brand</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}>Colorway</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}>Gender</TableCell>
                            <TableCell align="left" style={{ width: "20%" }}>Release Date</TableCell>
                            <TableCell align="left" style={{ width: "20%" }}>Release Year</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}>Retail Price</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}>Discounted Price</TableCell>
                            <TableCell align="left" style={{ width: "30%" }}>Product Photo</TableCell>
                            <TableCell align="left" style={{ width: "10%" }}></TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody style={{ color: "white" }}>
                        {visibleRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ width: "30%" }}>
                                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                        {row.name}
                                    </div>
                                </TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>{row.brand}</TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>{row.colorway}</TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>{row.gender}</TableCell>
                                <TableCell align="left" style={{ width: "20%" }}>{row.releaseDate.toLocaleDateString()}</TableCell>
                                <TableCell align="left" style={{ width: "20%" }}>{row.releaseYear}</TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>{row.retailPrice}</TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>{row.discountPrice}</TableCell>
                                <TableCell align="left" style={{ width: "30%" }}>
                                    <img src={row.image} alt={row.name} style={{ maxWidth: "100%", maxHeight: "auto" }} />
                                </TableCell>
                                <TableCell align="left" style={{ width: "10%" }}>
                                    <span className="update-icon">
                                        <FaRegPenToSquare />
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="pagination-container">
                <Pagination
                    count={totalPageCount}
                    page={currentPage}
                    onChange={handleChangePage}
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
    );
}
