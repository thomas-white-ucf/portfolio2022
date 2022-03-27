import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import App from "./App";

import CssBaseline from "@mui/material/CssBaseline";

// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  rootElement
);
