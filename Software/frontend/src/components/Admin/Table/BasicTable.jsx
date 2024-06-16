import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination"; // Import Pagination
import "./Table.css";



function createData(username, id, qty, date) {
    return { username, id, qty, date };
}

const rows = [
    createData("John Doe", 12345, 2, "2022-06-01"),
    createData("Jane Smith", 67890, 1, "2022-06-02"),
    createData("Michael Johnson", 24680, 3, "2022-06-03"),
    createData("Emily Davis", 13579, 2, "2022-06-04"),
    createData("William Brown", 98765, 1, "2022-06-05"),
    createData("Sophia Wilson", 45678, 2, "2022-06-06"),
    createData("James Taylor", 24680, 3, "2022-06-07"),
    createData("Olivia Martinez", 12345, 1, "2022-06-08"),
    createData("Benjamin Anderson", 98765, 2, "2022-06-09"),
    createData("Ava Thomas", 24680, 3, "2022-06-10"),
    createData("Alexander White", 13579, 1, "2022-06-11"),
    createData("Mia Harris", 45678, 2, "2022-06-12"),
    createData("Ethan Martin", 12345, 3, "2022-06-13"),
    createData("Isabella Thompson", 98765, 1, "2022-06-14"),
    createData("Emma Garcia", 24680, 2, "2022-06-15"),
    createData("Noah Martinez", 13579, 3, "2022-06-16"),
    createData("Charlotte Robinson", 45678, 1, "2022-06-17"),
    createData("Liam Clark", 12345, 2, "2022-06-18"),
    createData("Amelia Rodriguez", 98765, 3, "2022-06-19"),
    createData("Elijah Lewis", 24680, 1, "2022-06-20"),
    createData("Abigail Lee", 13579, 2, "2022-06-21"),
    createData("Harper Walker", 45678, 3, "2022-06-22"),
    createData("Daniel Hall", 12345, 1, "2022-06-23"),
    createData("Sofia Young", 98765, 2, "2022-06-24"),


];


const PAGE_SIZE = 5;


export default function BasicTable() {
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
            <h2>Recent Orders</h2>
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
                            <TableCell style={{ width: "25%" }}>Username</TableCell>
                            <TableCell align="left" style={{ width: "20%" }}>Order ID</TableCell>
                            <TableCell align="left" style={{ width: "20%" }}>Quantity</TableCell>
                            <TableCell align="left" style={{ width: "15%" }}>Date</TableCell>
                            <TableCell align="left" style={{ width: "20%" }}></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody style={{ color: "white" }}>
                        {visibleRows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" style={{ width: "25%" }}>
                                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                        {row.username}
                                    </div>
                                </TableCell>
                                <TableCell align="left" style={{ width: "20%" }}>{row.id}</TableCell>
                                <TableCell align="left" style={{ width: "20%" }}>{row.qty}</TableCell>
                                <TableCell align="left" style={{ width: "15%" }}>{row.date}</TableCell>

                                <TableCell align="left" style={{ width: "20%" }} className="Details">Details</TableCell>
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
                            minWidth: 'unset', // Unset the minimum width
                            padding: '2rem', // Adjust padding as needed
                            margin: '0 3px', // Adjust margin as needed
                        },
                    }}
                />
            </div>
        </div>
    );
}
