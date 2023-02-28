import React from "react";
import { useState } from "react";
import withLayout from "../../../component/SideBar/SideBar";
import "./Attendance.css";
function Attendance() {
  const [attendance, setAttendance] = useState(true);
  const takeAttendance = () => setAttendance(!attendance);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-4">
                <div className="form-group">
                  <label>Course</label>
                  <select className="form-control select">
                    <option>BBA</option>
                    <option>BCA</option>
                    <option>B.Com(GUJ)</option>
                    <option>B.Com(ENG)</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="form-group">
                  <label>Year</label>
                  <select className="form-control select">
                    <option>FY</option>
                    <option>SY</option>
                    <option>TY</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="form-group">
                  <label>SEM</label>
                  <select className="form-control select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control select">
                    <option>Faculty</option>
                    <option>Student</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div
                  className="box"
                  onClick={takeAttendance}
                  style={{
                    backgroundColor: attendance ? "#59cf59" : "rgb(245 58 76)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ marginLeft: "20px" }}>20410301</div>
                  <div>Avni Zalavadiya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withLayout(Attendance);
