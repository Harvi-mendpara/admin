import React, { useState } from "react";
import withLayout from "../../../component/SideBar/SideBar";
import "./Notice.css";
import axios from "axios";

function AddNotice() {
  const obj = {
    date: "",
    title: "",
    message: "",
    send: "",
  };
  const [addNotice, setAddNotice] = useState(obj);
  const [addNoticearr, setAddNoticeArr] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddNotice({ ...addNotice, [name]: value });
    console.log(addNotice);
  };

  const addNoticeData = async (e) => {
    e.preventDefault();

    const noticeObj = { ...addNotice };
    addNoticearr.push(noticeObj);
    setAddNoticeArr(addNoticearr);
    console.log(addNoticearr);

    await axios
      .post(
        "http://localhost:4000/api/use/admin/facultyProfile/create",
        ...addNoticearr
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
              <h3 style={{ marginBottom: "30px" }}>Add Notice</h3>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group local-forms">
                              <label>
                                Date <span className="login-danger">*</span>
                              </label>
                              <input
                                type="date"
                                name="date"
                                value={addNotice.date}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group local-forms">
                              <label>
                                Title <span className="login-danger">*</span>
                              </label>
                              <input
                                type="text"
                                name="title"
                                value={addNotice.title}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group local-forms">
                              <label>
                                Message <span className="login-danger">*</span>
                              </label>
                              <textarea
                                type="text"
                                name="message"
                                value={addNotice.message}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-sm-6">
                            <div className="form-group local-forms">
                              <label>
                                Send To <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="send"
                                value={addNotice.send}
                                onChange={handleChange}
                              >
                                <option>Send with</option>
                                <option>Faculty</option>
                                <option>Student</option>
                                <option>Both</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="student-submit">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={addNoticeData}
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

export default withLayout(AddNotice);
