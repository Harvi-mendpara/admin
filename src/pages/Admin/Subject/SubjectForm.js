import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Subject from "./Subject";
import withLayout from "../../../component/SideBar/SideBar";
import "../../../component/Form/Form.css";
function SubjectForm() {
  let subObj = {
    id: "",
    subname: "",
    course: "",
    year: "",
    sem: "",
  };
  const [open, setOpen] = useState(false);
  const [subObject, setSubObject] = useState(subObj);
  const [subArr, setSubArr] = useState([]);
  const [subIds, setSubIds] = useState("");
  const [subUpdate, setSubUpdate] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubObject({ ...subObject, [name]: value });
  };

  const handleSubmitSubject = () => {
    let temp = Math.max.apply(
      Math,
      subArr.map((item) => {
        return item.id;
      })
    );
    let id = temp === -Infinity || temp == null ? 1 : temp + 1;
    subObject.id = id;
    subArr.push(subObject);
    setSubArr([...subArr]);
    handleClose();
    setSubUpdate(false);
    localStorage.setItem("sarray", JSON.stringify(subArr));
  };

  const handleEditSubject = (id) => {
    let temp = [...subArr];
    handleClickOpen();
    let edit = temp.filter((item) => item.id === id)[0];
    setSubObject(edit);
    setSubIds(edit.id);
    setSubUpdate(true);
  };

  const handleUpdateSubject = () => {
    let temp = [...subArr];
    let update = temp.findIndex((item) => item.id === subIds);
    temp.splice(update, 1, { ...subObject });
    setSubArr(temp);
    setSubUpdate(true);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={() => {
          handleClickOpen();
          setSubObject(subObject);
          setSubUpdate(false);
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
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="subname"
            value={subObject.subname}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="course"
            name="course"
            label="Course"
            type="text"
            fullWidth
            value={subObject.course}
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
            value={subObject.year}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="sem"
            name="sem"
            label="Semester"
            type="text"
            fullWidth
            value={subObject.sem}
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
          {subUpdate === false ? (
            <Button
              variant="contained"
              onClick={handleSubmitSubject}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleUpdateSubject}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Update
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Subject
        subArr={subArr}
        setSubArr={setSubArr}
        handleEditSubject={handleEditSubject}
      />
    </>
  );
}

export default withLayout(SubjectForm);
