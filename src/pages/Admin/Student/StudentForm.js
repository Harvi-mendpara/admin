import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Student from "./Student";
import withLayout from "../../../component/SideBar/SideBar";
import "../../../component/Form/Form.css";
function StudentForm() {
  let sObj = {
    id: "",
    name: "",
    email: "",
    gender: "",
    bod: "",
    contact: "",
    address: "",
    course: "",
    year: "",
    sem: "",
    class: "",
  };
  const [open, setOpen] = useState(false);
  const [sObject, setsObject] = useState(sObj);
  const [sArr, setsArr] = useState([]);
  const [sIds, setsIds] = useState("");
  const [sUpdate, setsUpdate] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsObject({ ...sObject, [name]: value });
  };

  const handleSubmitStudent = () => {
    let temp = Math.max.apply(
      Math,
      sArr.map((item) => {
        return item.id;
      })
    );
    let id = temp === -Infinity || temp == null ? 1 : temp + 1;
    sObject.id = id;
    sArr.push(sObject);
    setsArr([...sArr]);
    handleClose();
    setsUpdate(false);
    localStorage.setItem("sarray", JSON.stringify(sArr));
  };

  const handleEditStudent = (id) => {
    let temp = [...sArr];
    handleClickOpen();
    let edit = temp.filter((item) => item.id === id)[0];
    setsObject(edit);
    setsIds(edit.id);
    setsUpdate(true);
  };

  const handleUpdateStudent = () => {
    let temp = [...sArr];
    let update = temp.findIndex((item) => item.id === sIds);
    temp.splice(update, 1, { ...sObject });
    setsArr(temp);
    setsUpdate(true);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={() => {
          handleClickOpen();
          setsObject(sObj);
          setsUpdate(false);
        }}
        variant="contained"
        style={{ marginTop: "30px", marginBottom: "10px", marginLeft: "90%" }}
      >
        {" "}
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} style={{ height: "650px" }}>
        <DialogTitle style={{ textAlign: "center" }}>Student Form</DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={sObject.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={sObject.email}
            onChange={handleChange}
          />
          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={sObject.gender}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                name="gender"
                onChange={handleChange}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                name="gender"
                onChange={handleChange}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            id="date"
            name="bod"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            fullWidth
            variant="standard"
            value={sObject.bod}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginTop: "10px" }}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="contact"
            name="contact"
            label="Contact No"
            type="text"
            fullWidth
            value={sObject.contact}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="address"
            name="address"
            label="Address"
            type="text"
            fullWidth
            value={sObject.address}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="course"
            name="course"
            label="Course"
            type="text"
            fullWidth
            value={sObject.course}
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
            value={sObject.year}
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
            value={sObject.sem}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            id="class"
            name="class"
            label="Class"
            type="text"
            fullWidth
            value={sObject.class}
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
          {sUpdate === false ? (
            <Button
              variant="contained"
              onClick={handleSubmitStudent}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleUpdateStudent}
              style={{ color: "white", backgroundColor: "#0072ff" }}
            >
              Update
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Student
        sArr={sArr}
        setsArr={setsArr}
        handleEditStudent={handleEditStudent}
      />
    </>
  );
}

export default withLayout(StudentForm);
