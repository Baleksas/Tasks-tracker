import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bab8b8",
      dark: "#000000",
      contrastText: "white",
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
      },
    },
    MuiFormLabel: {
      root: {
        color: "#bab8b8",
      },
    },
    MuiPaper: {
      root: {
        color: "white",
        backgroundColor: "rgba(55, 55, 31, 0.9)",
        borderRadius: "5px",
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
        color: "white",
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
