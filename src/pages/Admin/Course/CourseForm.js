import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Course from "./Course";
import withLayout from "../../../component/SideBar/SideBar";
import "../../../component/Form/Form.css";
function CourseForm() {
  let cObj = {
    id: "",
    course: "",
    year: "",
  };
  const [open, setOpen] = useState(false);
  const [cObject, setCObject] = useState(cObj);
  const [cArr, setCArr] = useState([]);
  const [cIds, setCIds] = useState("");
  const [cUpdate, setCUpdate] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCObject({ ...cObject, [name]: value });
  };

  const handleSubmitCourse = () => {
    let temp = Math.max.apply(
      Math,
      cArr.map((item) => {
        return item.id;
      })
    );
    let id = temp === -Infinity || temp == null ? 1 : temp + 1;
    cObject.id = id;
    cArr.push(cObject);
    setCArr([...cArr]);
    handleClose();
    setCUpdate(false);
    localStorage.setItem("sarray", JSON.stringify(cArr));
  };

  const handleEditCourse = (id) => {
    let temp = [...cArr];
    handleClickOpen();
    let edit = temp.filter((item) => item.id === id)[0];
    setCObject(edit);
    setCIds(edit.id);
    setCUpdate(true);
  };

  const handleUpdateCourse = () => {
    let temp = [...cArr];
    let update = temp.findIndex((item) => item.id === cIds);
    temp.splice(update, 1, { ...cObject });
    setCArr(temp);
    setCUpdate(true);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={() => {
          handleClickOpen();
          setCObject(cObject);
          setCUpdate(false);
        }}
        variant="contained"
        style={{ marginTop: "30px", marginBottom: "10px", marginLeft: "90%" }}
      >
        {" "}
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} style={{ height: "650px" }}>
        <DialogTitle style={{ textAlign: "center" }}>Subject Form</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            id="course"
            name="course"
            label="Course"
            type="text"
            fullWidth
            value={cObject.course}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="year"
            name="year"
            label="Year"
            type="text"
            fullWidth
            value={cObject.year}
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            style={{ color: "white", backgroundColor: "#db3d3d" }}
          >
            Cancel
          </Button>
          {cUpdate === false ? (
            <Button
              variant="contained"
              onClick={handleSubmitCourse}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleUpdateCourse}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Update
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Course
        cArr={cArr}
        setCArr={setCArr}
        handleEditCourse={handleEditCourse}
      />
    </>
  );
}

export default withLayout(CourseForm);
