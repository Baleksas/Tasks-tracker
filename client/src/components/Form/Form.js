import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { createTask } from "../../actions/tasks";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import CustomizedSnackbars from "../Snackbar";

const Form = ({ tasks, tasksType }) => {
  // Task fields
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs(undefined));
  // Checkbox
  const [includeDate, setIncludeDate] = useState(true);

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  const activateSnackbar = () => {
    setOpenSnackbar(true);
  };

  const dispatch = useDispatch();

  // Create task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      dateToComplete: date,
      type: "default",
    };

    // No duplicate title
    if (tasks.filter((t) => t.title === newTask.title).length !== 0) {
      setMessage("No duplicate tasks are allowed");
      setSeverity("error");
      activateSnackbar();
      return;
    }

    // No empty title
    if (newTask.title === "") {
      setMessage("Empty titles are not allowed");
      setSeverity("error");
      activateSnackbar();
      return;
    }
    dispatch(createTask(newTask));

    // Alert success
    setMessage("Task created successfully!");
    setSeverity("success");
    activateSnackbar();

    setTitle("");
  };

  useEffect(() => {
    if (includeDate === true) setDate(dayjs(undefined));
    if (includeDate === false) setDate(null);
  }, [includeDate]);

  return (
    <React.Fragment>
      {tasksType === "default" && (
        <form noValidate className="add-task-form" onSubmit={handleSubmit}>
          <TextField
            name="task"
            variant="filled"
            label="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={includeDate}
                onChange={(e) => setIncludeDate(e.target.checked)}
              />
            }
            label="Include date to complete by"
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

          <Button
            className="add-task-button"
            variant="outlined"
            color="primary"
            size="small"
            type="submit"
          >
            <AddIcon />
          </Button>
        </form>
      )}
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message={message}
        severity={severity}
      />
    </React.Fragment>
  );
};

export default Form;
