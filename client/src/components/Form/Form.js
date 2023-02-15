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
  const [includeDate, setIncludeDate] = useState(true);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs("2023-04-07"));

  const dispatch = useDispatch();

  // Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const activateSnackbar = () => {
    setOpenSnackbar(true);
  };

  // Create task
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      dateToComplete: date.toString(),
      type: "default",
    };
    // No duplicate title
    if (tasks.filter((t) => t.title === newTask.title).length !== 0) {
      // alert("No duplicate tasks are allowed");
      setErrorMessage("No duplicate tasks are allowed");
      activateSnackbar();
      return;
    }

    // No empty title
    if (newTask.title === "") {
      setErrorMessage("Empty titles are not allowed");
      activateSnackbar();
      return;
    }
    dispatch(createTask(newTask));
    setTitle("");
  };

  useEffect(() => {
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
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
};

export default Form;
