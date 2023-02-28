import React, { useState } from "react";
import withLayout from "../../../component/SideBar/SideBar";
import "./Staff.css";
import axios from "axios";
function AddStaff() {
  const obj = {
    fName: "",
    lName: "",
    gender: "",
    dateOfBirth: "",
    contactNo: "",
    joiningDate: "",
    qualification: "",
    experiance: "",
    pImg:"",
    userName: "",
    email: "",
    password: "",
    repassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
  };
  const [addStaff, setAddstaff] = useState(obj);
  const [addStaffarr, setAddstaffArr] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddstaff({ ...addStaff, [name]: value });
    console.log(addStaff);
  };

  const addStaffData = async (e) => {
    e.preventDefault();

    const staffObj = { ...addStaff };
    addStaffarr.push(staffObj);
    setAddstaffArr(addStaffarr);
    console.log(addStaffarr);

    await axios
      .post(
        "http://localhost:4000/api/use/admin/facultyProfile/create",
        ...addStaffarr
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <h3 style={{ marginBottom: "30px" }}>Add Staff</h3>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-12">
                            <h5 className="form-title">
                              <span>Basic Details</span>
                            </h5>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                First Name{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="fName"
                                value={addStaff.fName}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                placeholder=" Enter First Name"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Last Name{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="lName"
                                value={addStaff.lName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Gender <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="gender"
                                value={addStaff.gender}
                                onChange={handleChange}
                              >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms calendar-icon">
                              <label>
                                Date Of Birth{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                className="form-control datetimepicker"
                                type="date"
                                value={addStaff.dateOfBirth}
                                onChange={handleChange}
                                name="dateOfBirth"
                                placeholder="DD-MM-YYYY"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Mobile <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="contactNo"
                                value={addStaff.contactNo}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Phone"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms calendar-icon">
                              <label>
                                Joining Date{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                className="form-control datetimepicker"
                                type="date"
                                value={addStaff.joiningDate}
                                onChange={handleChange}
                                name="joiningDate"
                                placeholder="DD-MM-YYYY"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4 local-forms">
                            <div className="form-group">
                              <label>
                                Qualification{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={addStaff.qualification}
                                onChange={handleChange}
                                name="qualification"
                                placeholder="Enter Qualification"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Experience{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                value={addStaff.experiance}
                                onChange={handleChange}
                                name="experiance"
                                placeholder="Enter Experience"
                              />
                            </div>
                          </div>
                          <div class="col-12 col-sm-4">
                            <h6>Upload Image</h6>
                            <input type="file" style={{ marginLeft: "20px" }} />
                          </div>
                          <div className="col-12">
                            <h5 className="form-title">
                              <span>Login Details</span>
                            </h5>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Username <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="userName"
                                value={addStaff.userName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Username"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Email ID <span className="login-danger">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={addStaff.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Mail Id"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Password <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="password"
                                value={addStaff.password}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Password"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Repeat Password{" "}
                                <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="repassword"
                                value={addStaff.repassword}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Repeat Password"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <h5 className="form-title">
                              <span>Address</span>
                            </h5>
                          </div>
                          <div className="col-12">
                            <div className="form-group local-forms">
                              <label>
                                Address <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="address"
                                value={addStaff.address}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter address"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                City <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={addStaff.city}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter City"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                State <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="state"
                                value={addStaff.state}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter State"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div className="form-group local-forms">
                              <label>
                                Country <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="country"
                                value={addStaff.country}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter Country"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="student-submit">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={addStaffData}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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

export default withLayout(AddStaff);
