import React from "react";
import withLayout from "../../../component/SideBar/SideBar";
import { BsFillEyeFill } from "react-icons/bs";
import "./StaffFeedback.css";
import Table from "react-bootstrap/Table";
import userImg from "../../../assets/user.png";

function StaffFeedback() {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title">Staff Feedback</h3>
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
                          <th class="text-center">Course</th>
                          <th class="text-center">Title</th>
                          <th class="text-center">Date</th>
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
                          <td class="text-center">aaliyah@gmail.com</td>
                          <td class="text-center">BBA</td>
                          <td class="text-center">about student</td>
                          <td class="text-center">03/04/2021</td>
                          <td class="text-center">
                            <div class="actions">
                              <BsFillEyeFill
                                style={{
                                  marginRight: "5px",
                                  color: "#0094ff",
                                }}
                              />
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
                          <td class="text-center">aaliyah@gmail.com</td>
                          <td class="text-center">BBA</td>
                          <td class="text-center">about student</td>
                          <td class="text-center">03/04/2021</td>
                          <td class="text-center">
                            <div class="actions">
                              <BsFillEyeFill
                                style={{
                                  marginRight: "5px",
                                  color: "#0094ff",
                                }}
                              />
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
    </>
  );
}

export default withLayout(StaffFeedback);
