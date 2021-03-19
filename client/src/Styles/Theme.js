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
        backgroundColor: "rgba(0,0,0,0.5)",
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
        minWidth: "40px",
        borderRadius: "0px",
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
