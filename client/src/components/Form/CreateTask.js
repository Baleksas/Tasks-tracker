import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../actions/tasks";
import { PaperComponent } from "../PaperComponent";
import CustomizedSnackbars from "../Snackbar";

const CreateTask = ({ tasks }) => {
  const [openCreate, setOpenCreate] = useState(false);

  // Task fields
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs(undefined));
  // Checkbox
  const [includeDate, setIncludeDate] = useState(true);

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

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
  const dispatch = useDispatch();

  const handleClose = () => {
    // Close dialog and null title, date
    setOpenCreate(false);
    setTitle("");
    setDate(dayjs(undefined));
    setIncludeDate(true);
  };
  // Create task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      dateToComplete: date,
      type: "default",
    };

    if (!checkErrors(newTask)) return;
    dispatch(createTask(newTask));

    // Alert success
    setMessage("Task created successfully!");
    setSeverity("success");
    setOpenSnackbar(true);
    handleClose();
  };

  useEffect(() => {
    if (includeDate === true) setDate(dayjs(undefined));
    if (includeDate === false) setDate(null);
  }, [includeDate]);

  return (
    <React.Fragment>
      {openCreate && (
        <Dialog
          open={openCreate}
          onClose={setOpenCreate}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Create task
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <div className="add-task-form">
                <TextField
                  name="task"
                  variant="filled"
                  label="Task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                {includeDate && (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      renderInput={(props) => <TextField {...props} />}
                      label="Date"
                      value={date}
                      onChange={(newDate) => setDate(newDate)}
                    />
                  </LocalizationProvider>
                )}
              </div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      checked={includeDate}
                      onChange={(e) => setIncludeDate(e.target.checked)}
                    />
                  }
                  label="Include date to complete by"
                />
              </FormGroup>
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button color="secondary" onClick={handleSubmit}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Button
        className="add-task-button"
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => setOpenCreate((prev) => !prev)}
        type="submit"
      >
        New Task <AddIcon />
      </Button>
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message={message}
        severity={severity}
      />
    </React.Fragment>
  );
};

export default CreateTask;
