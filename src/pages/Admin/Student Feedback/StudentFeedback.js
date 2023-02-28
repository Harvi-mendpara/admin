import React from "react";
import withLayout from "../../../component/SideBar/SideBar";
import { BsFillEyeFill } from "react-icons/bs";

function StudentFeedback() {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div class="page-header">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="page-title">Student Feedback</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="card card-table">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-center mb-0 datatable">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Course</th>
                              <th>Semester</th>
                              <th>Divison</th>
                              <th>Title</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>PRE2209</td>
                              <td>Avni Zalavadiya</td>
                              <td>BCA</td>
                              <td>TY</td>
                              <td>1</td>
                              <td>About student</td>
                              <td>12/10/2022</td>
                              <td>
                                <BsFillEyeFill />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
export default withLayout(StudentFeedback);
