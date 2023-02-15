import React from "react";
import CustomizedSnackbars from "./Snackbar";

const SnackbarProvider = ({
  children,
  openSnackbar,
  setOpenSnackbar,
  message,
  severity,
}) => {
  return (
    <React.Fragment>
      {children}
      <CustomizedSnackbars
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        message={message}
        severity={severity}
      />
    </React.Fragment>
  );
};

export default SnackbarProvider;
