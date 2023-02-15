import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../actions/tasks";
import { PaperComponent } from "../PaperComponent";
import CustomizedSnackbars from "../Snackbar";

const EditTask = ({ task, update, allowEdit, setAllowEdit }) => {
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDate, setNewDate] = useState(task.dateToComplete);

  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setAllowEdit(false);
  };

  //get tasks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  const tasks = useSelector((state) => state.tasks);

  const checkErrors = (taskToCheck) => {
    // No duplicate title
    if (
      tasks.filter(
        (t) =>
          t?.title.toString().toLowerCase() === taskToCheck.title.toLowerCase()
      ).length !== 0
    ) {
      setMessage("No duplicate tasks are allowed");
      setSeverity("error");
      setOpenSnackbar(true);
      return false;
    }

    // No empty title
    if (taskToCheck.title === "") {
      setMessage("Empty titles are not allowed");
      setSeverity("error");
      setOpenSnackbar(true);
      return false;
    }
    return true;
  };

  const confirmEdit = (e) => {
    e.preventDefault();
    const editedTask = { ...task };
    editedTask["title"] = newTitle;
    editedTask["dateToComplete"] = newDate;
    if (!checkErrors(editedTask)) return;
    update(task._id, editedTask);
    handleClose();
  };

  return (
    <React.Fragment>
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
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message={message}
        severity={severity}
      />
    </React.Fragment>
  );
};

export default EditTask;
