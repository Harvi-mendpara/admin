import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import withLayout from "../../../component/SideBar/SideBar";
import userImg from "../../../assets/user.png";
import "./Student.css";
function Student() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <div className="row">
            <div class="page-header">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="page-title">Students</h3>
                </div>
                <div class="col-auto text-right float-right ml-auto">
                  <a href="/ourstudent/addstudent">
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
                        <th class="text-center">Name</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Gender</th>
                        <th class="text-center">BOD</th>
                        <th class="text-center">Mobile Number</th>
                        <th class="text-center">Address</th>
                        <th class="text-center">Course</th>
                        <th class="text-center">Sem</th>
                        <th class="text-center">Div</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">PRE2209</td>
                        <td class="text-center">
                          <h2 class="table-avatar">
                            <a
                              href="teacher-details.html"
                              class="avatar avatar-sm mr-2"
                            >
                              <img
                                class="img-circle elevation-2 user-img"
                                src={userImg}
                              />
                            </a>
                            <a
                              href="teacher-details.html"
                              style={{
                                textDecoration: "none",
                                color: "#212529",
                              }}
                            >
                              Aaliyah
                            </a>
                          </h2>
                        </td>
                        <td class="text-center">aliyah@gmail.com</td>
                        <td class="text-center">Female</td>
                        <td class="text-center">12/10/1979</td>
                        <td class="text-center">097 3584 5870</td>
                        <td class="text-center">911 Deer Ridge Drive,USA</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">4</td>
                        <td class="text-center">1</td>
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
                        <td class="text-center">
                          <h2 class="table-avatar">
                            <a
                              href="teacher-details.html"
                              class="avatar avatar-sm mr-2"
                            >
                              <img
                                class="img-circle elevation-2 user-img"
                                src={userImg}
                              />
                            </a>
                            <a
                              href="teacher-details.html"
                              style={{
                                textDecoration: "none",
                                color: "#212529",
                              }}
                            >
                              Aaliyah
                            </a>
                          </h2>
                        </td>
                        <td class="text-center">aliyah@gmail.com</td>
                        <td class="text-center">Female</td>
                        <td class="text-center">12/10/1979</td>
                        <td class="text-center">097 3584 5870</td>
                        <td class="text-center">911 Deer Ridge Drive,USA</td>
                        <td class="text-center">BBA</td>
                        <td class="text-center">6</td>
                        <td class="text-center">2</td>
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

export default withLayout(Student);
