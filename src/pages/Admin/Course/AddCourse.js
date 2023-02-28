import React, { useState } from "react";
import withLayout from "../../../component/SideBar/SideBar";
import "./Course.css";
import axios from "axios";
function AddCourse() {
  const obj = {
    courseName: "",
    year: "",
    sem: "",
    subjects: "",
    createdAt: "",
  };
  const [addCourse, setAddCourse] = useState(obj);
  const [addCoursearr, setAddCourseArr] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "year") {
      setAddCourse({ ...addCourse, [name]: e.target.checked });
    } else {
      setAddCourse({ ...addCourse, [name]: value });
    }

    console.log(addCourse);
  };

  const addCourseData = async (e) => {
    e.preventDefault();

    const courseObj = { ...addCourse };
    addCoursearr.push(courseObj);
    setAddCourseArr(addCoursearr);
    console.log(addCoursearr);

    await axios
      .post(
        "http://localhost:4000/api/use/admin/facultyProfile/create",
        ...addCoursearr
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let courseDetail = {
    BCA: {
      FY: {
        "sem-1": ["CS", "Mathematics", "IC", "Cppm", "DMA", "Practical"],
        "sem-2": ["HTML", "Accountant", "OS-1", "PS", "RDBMS", "Practical"],
      },
      SY: {
        "sem-3": ["Statistics", "SE", "Python", "OOPS", "WD-1", "Practical"],
        "sem-4": ["IS", "IOT", "JAVA", ".Net", "WD-2", "Practical"],
      },
      TY: {
        "sem-5": ["AWD", "Unix", "NT", "php", "Asp.Net", "Practical"],
        "sem-6": ["CG", "Ecom", "Project"],
      },
    },

    BBA: {
      FY: {
        "sem-1": ["CS", "Mathematics", "IC", "Cppm", "DMA", "Practical"],
        "sem-2": ["HTML", "Accountant", "OS-1", "PS", "RDBMS", "Practical"],
      },
      SY: {
        "sem-3": ["Statistics", "SE", "Python", "OOPS", "WD-1", "Practical"],
        "sem-4": ["IS", "IOT", "JAVA", ".Net", "WD-2", "Practical"],
      },
      TY: {
        "sem-5": ["AWD", "Unix", "NT", "php", "Asp.Net", "Practical"],
        "sem-6": ["CG", "Ecom", "Project"],
      },
    },

    "B.Com(Guj)": {
      FY: {
        "sem-1": ["CS", "Mathematics", "IC", "Cppm", "DMA", "Practical"],
        "sem-2": ["HTML", "Accountant", "OS-1", "PS", "RDBMS", "Practical"],
      },
      SY: {
        "sem-3": ["Statistics", "SE", "Python", "OOPS", "WD-1", "Practical"],
        "sem-4": ["IS", "IOT", "JAVA", ".Net", "WD-2", "Practical"],
      },
      TY: {
        "sem-5": ["AWD", "Unix", "NT", "php", "Asp.Net", "Practical"],
        "sem-6": ["CG", "Ecom", "Project"],
      },
    },

    "B.com(Eng)": {
      FY: {
        "sem-1": ["CS", "Mathematics", "IC", "Cppm", "DMA", "Practical"],
        "sem-2": ["HTML", "Accountant", "OS-1", "PS", "RDBMS", "Practical"],
      },
      SY: {
        "sem-3": ["Statistics", "SE", "Python", "OOPS", "WD-1", "Practical"],
        "sem-4": ["IS", "IOT", "JAVA", ".Net", "WD-2", "Practical"],
      },
      TY: {
        "sem-5": ["AWD", "Unix", "NT", "php", "Asp.Net", "Practical"],
        "sem-6": ["CG", "Ecom", "Project"],
      },
    },
  };

  let year =
    addCourse.courseName !== "" &&
    Object.keys(courseDetail[addCourse?.courseName]);
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="row">
              <h3 style={{ marginBottom: "30px" }}>Add Course</h3>
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="row">
                          <div className="col-12 col-sm-6">
                            <div className="form-group local-forms">
                              <label>
                                Course <span className="login-danger">*</span>
                              </label>
                              <select
                                className="form-control select"
                                name="courseName"
                                value={addCourse.courseName}
                                onChange={handleChange}
                              >
                                <option>Select Course</option>
                                {Object.keys(courseDetail).map((course) => {
                                  return <option>{course}</option>;
                                })}
                              </select>
                            </div>
                          </div>

                          <div className="col-12 col-sm-6">
                            {addCourse.courseName !== "" && (
                              <>
                                <label>
                                  Year <span className="login-danger">*</span>
                                </label>
                                <div>
                                  {year.map((years) => {
                                    console.log(years);
                                    return (
                                      <>
                                        <input
                                          type="checkbox"
                                          onChange={handleChange}
                                          name="year"
                                          checked={year[years]}
                                        />
                                        <span style={{ marginLeft: "5px" }}>
                                          {year}
                                        </span>
                                        <br />
                                      </>
                                    );
                                  })}
                                </div>
                              </>
                            )}
                          </div>
                          <div className="col-12 col-sm-2">
                            {/* {addCourse?.courseName !== "" &&
                              addCourse?.year !== "" && (
                                <>
                                  <label>
                                    Semester{" "}
                                    <span className="login-danger">*</span>
                                  </label>
                                  <div>
                                    {addCourse?.courseName !== "" &&
                                      addCourse?.year !== "" &&
                                      Object.keys(
                                        courseDetail[addCourse?.courseName][
                                          addCourse?.year
                                        ]
                                      ).map((sem) => {
                                        return (
                                          <>
                                            <input
                                              type="checkbox"
                                              value={addCourse.sem}
                                              onChange={handleChange}
                                              name="sem"
                                            />
                                            <span style={{ marginLeft: "5px" }}>
                                              {sem}
                                            </span>

                                            <br />
                                          </>
                                        );
                                      })}
                                  </div>
                                </>
                              )} */}
                          </div>
                          <div className="col-12 col-sm-2">
                            <label>
                              Subjects <span className="login-danger">*</span>
                            </label>
                            <div className="col-12 col-sm-2">
                              <input
                                type="checkbox"
                                value={addCourse.subjects}
                                onChange={handleChange}
                                name="subjects"
                                checked
                              />{" "}
                              CS <br />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="student-submit">
                              <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={addCourseData}
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

export default withLayout(AddCourse);
