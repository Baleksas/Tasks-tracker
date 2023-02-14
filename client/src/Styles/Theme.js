import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#66bb6a",
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        color: "#ffffff",
        backgroundColor: "rgba(100,100,100,100.5)",
        // border: "1px solid white",
        borderBottomLeftRadius: "5px",
        borderTopLeftRadius: "5px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#ffffff",
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
