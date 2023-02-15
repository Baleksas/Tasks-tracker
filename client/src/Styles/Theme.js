import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FEFCF3",
      dark: "#000000",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        color: "#FEFCF3",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#FEFCF3",
      },
    },
    MuiPaper: {
      root: {
        borderRadius: "5px",
        backgroundColor: "#808080",
        color: "#FEFCF3",
        width: "max-content",
      },
    },
    MuiButtonBase: {
      root: {
        color: "#FEFCF3",
      },
    },
    MuiIconButton: {
      root: {
        color: "#FEFCF3",
        fontFamily: "Poppins",
      },
    },
    MuiInputLabel: {
      root: {
        padding: "0 0 0 10px",
      },
    },

    MuiInputBase: {
      root: {
        color: "#FEFCF3",
        fontFamily: "Poppins",
      },
    },
    MuiButton: {
      root: {
        fontSize: "15px",
        minWidth: "15px",
        borderRadius: "7px",
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
