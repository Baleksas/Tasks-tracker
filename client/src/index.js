import { ThemeProvider } from "@material-ui/core/styles";
import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { theme } from "./Styles/Theme";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const preloadedState = {};
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  preloadedState,
});

export default store;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
