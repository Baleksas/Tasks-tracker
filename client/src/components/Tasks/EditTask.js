import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import Draggable from "react-draggable";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const PaperComponent = (props) => {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

const EditTask = ({ task, update, allowEdit, setAllowEdit }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDate, setNewDate] = useState(task.dateToComplete);

  const handleClose = () => {
    setAllowEdit(false);
  };

  const confirmEdit = (e) => {
    e.preventDefault();
    handleClose();
    const editedTask = { ...task };
    editedTask["title"] = newTitle;
    editedTask["dateToComplete"] = newDate;
    console.log(editedTask);
    update(task._id, editedTask);
  };

  return (
    <Dialog
      open={allowEdit}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Edit task
      </DialogTitle>
      <DialogContent>
        <form noValidate className="add-task-form" onSubmit={confirmEdit}>
          <TextField
            name="task"
            variant="filled"
            label="Task title"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Date"
              value={newDate}
              onChange={(newDate) => setNewDate(newDate)}
            />
          </LocalizationProvider>
        </form>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={confirmEdit}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTask;
