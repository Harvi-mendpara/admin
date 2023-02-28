import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
  } from '@material-ui/core';


function Delete(props) {
    const {open,setOpen,handleDelete} = props;

    const handleClose = () => {
        setOpen(false);
      };

  return (
      <>
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
    <DialogTitle>Confirm the action</DialogTitle>
    <DialogContent>
      <Typography>Are you sure want to delete this record ?</Typography>
    </DialogContent>
    <DialogActions>
      <Button variant="contained" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" style={{ color: "white", backgroundColor: "#db3d3d" }} onClick={handleDelete}> 
        Confirm
      </Button>
    </DialogActions>
  </Dialog>
  </>
  )
}

export default Delete