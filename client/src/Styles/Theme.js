import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bab8b8",
      dark: "#000000",
      contrastText: "#000000",
    },
    secondary: {
      main: "#66bb6a",
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        color: "#bab8b8",
        backgroundColor: "rgba(100,100,100,100.5)",
        // border: "1px solid white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#bab8b8",
      },
    },
    MuiInputBase: {
      root: {
        color: "#ffffff",
        fontFamily: "Poppins",
      },
    },
    MuiButton: {
      root: {
        fontSize: "15px",
        minWidth: "15px",
        borderRadius: "7px",
        padding: "0px",
      },
    },

    MuiSvgIcon: {
      root: {
        fontSize: "28px",
        transition: "all 100ms ease-in",
      },
    },
  },
});
