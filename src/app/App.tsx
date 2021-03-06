import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../theme/material-theme";
import "./App.scss";
import AppRouter from "./Router";

const App = (props: any) => (
  <Provider store={props.store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
App.propTypes = {
  store: PropTypes.object.isRequired,
};
