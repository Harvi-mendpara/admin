import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import withLayout from "../../../component/SideBar/SideBar";
import "./Course.css";
function Courses() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Courses</h3>
                </div>
                <div class="col-auto text-right float-right ml-auto">
                  <a href="/courses/addcourse">
                    <button
                      style={{
                        padding: "3px 25px",
                        marginRight: "25px",
                        borderRadius: "5px",
                        backgroundColor: "#005d91",
                        border: "none",
                        color: "#fff",
                      }}
                    >
                      Add
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div className="shadow">
                  <Table striped bordered hover>
                    <thead>
                      <tr style={{ backgroundColor: "#005d91" }}>
                        <th class="text-center">ID</th>
                        <th class="text-center">Course Name</th>
                        <th class="text-center">Year</th>
                        <th class="text-center">Sem</th>
                        <th class="text-center">Subject</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">FY</td>
                        <td class="text-center">1</td>
                        <td class="text-center">CS,ENG</td>
                        <td class="text-center">
                          <div class="actions">
                            <EditIcon
                              style={{
                                marginRight: "5px",
                                color: "#0094ff",
                              }}
                            />
                            <DeleteIcon style={{ color: "#db3d3d" }} />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">FY</td>
                        <td class="text-center">1</td>
                        <td class="text-center">CS,ENG</td>
                        <td class="text-center">
                          <div class="actions">
                            <EditIcon
                              style={{
                                marginRight: "5px",
                                color: "#0094ff",
                              }}
                            />
                            <DeleteIcon style={{ color: "#db3d3d" }} />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(Courses);
