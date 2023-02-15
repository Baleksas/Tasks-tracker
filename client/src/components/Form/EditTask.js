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
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PaperComponent } from "../PaperComponent";

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
        <form onSubmit={confirmEdit}>
          <div className="add-task-form">
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
                componentsProps={{
                  shortcuts: {
                    items: [
                      {
                        label: "Reset",
                        getValue: () => [null, null],
                      },
                    ],
                  },
                }}
                renderInput={(props) => <TextField {...props} />}
                label="Date"
                value={newDate}
                onChange={(newDate) => setNewDate(newDate)}
              />
            </LocalizationProvider>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button color="secondary" onClick={confirmEdit}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTask;
