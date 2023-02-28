import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from "../../../component/Delete/Delete";
import "./Subject.css";
function Subject(props) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const { subArr, setSubArr, handleEditSubject } = props;
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const handleDelete = () => {
    setSubArr(subArr.filter((item) => item.id != deleteId));
    setOpen(false);
  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Id</StyledTableCell>
                      <StyledTableCell align="center">
                        Subject Name
                      </StyledTableCell>
                      <StyledTableCell align="center">Course</StyledTableCell>
                      <StyledTableCell align="center">Year</StyledTableCell>
                      <StyledTableCell align="center">Semester</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {subArr?.map((row) => (
                      <StyledTableRow key={row.subname}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {row.subname}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.course}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.year}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.sem}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <EditIcon
                            style={{ marginRight: "5px", color: "#0094ff" }}
                            onClick={() => handleEditSubject(row.id)}
                          />

                          <DeleteIcon
                            style={{ color: "#db3d3d" }}
                            onClick={() => {
                              setOpen(true);
                              setDeleteId(row.id);
                            }}
                          />

                          <Delete
                            open={open}
                            setOpen={setOpen}
                            handleDelete={handleDelete}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
