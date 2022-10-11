import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Row = props => {
    const {
        row,
        rowData,
        hiddenRowData,
        hiddenRowHead,
        hiddenRowData2,
        hiddenRowHead2,
        onEdit,
        onDelete
    } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                {rowData.map(el => (
                    <TableCell key={el} component="th" scope="row">
                        {row[el]}
                    </TableCell>
                ))}
            </TableRow>

            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {hiddenRowHead.map(el => (
                                            <TableCell sx = {{fontWeight:'bold'}} key={el} >
                                                {el}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        {hiddenRowData.map(el => (
                                            <TableCell  key={el}>
                                                {row.company[el]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    {/* <TableRow>
                                        <TableCell align = 'right'><Button onClick={() => onDelete(row.id)}>Delete</Button></TableCell>
                                        <TableCell align = 'right'><Button onClick = {() => onEdit(row)}>Edit</Button></TableCell>
                                    </TableRow> */}
                                </TableBody>
                            </Table>

                            <Table size="small">
                                <TableHead>
                                    <TableRow sx={{ fontWeight: "bold" }}>
                                        {hiddenRowHead2.map(el => (
                                            <TableCell
                                                key={el}
                                               
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {el}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        {hiddenRowData2.map(el => (
                                            <TableCell key={el}>
                                                {row.address[el]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="right">
                                            <Button
                                                onClick={() => onDelete(row.id)}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => onEdit(row)}>
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

const UserTable = props => {
    const {
        rows,
        head,
        rowData,
        hiddenRowData,
        hiddenRowHead,
        hiddenRowData2,
        hiddenRowHead2,
        onEdit,
        onDelete
    } = props;

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        {head.map(h => (
                            <TableCell key={h}>{h}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <Row
                            key={row.id}
                            row={row}
                            rowData={rowData}
                            hiddenRowHead={hiddenRowHead}
                            hiddenRowData={hiddenRowData}
                            hiddenRowHead2={hiddenRowHead2}
                            hiddenRowData2={hiddenRowData2}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
