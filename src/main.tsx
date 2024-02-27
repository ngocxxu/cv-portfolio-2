import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "./index.css";

const theme = createTheme({
  primaryColor: "primary-color",
  colors: {
    "primary-color": [
      "#F0FFF5",
      "#D1FFDE",
      "#A3FFC8",
      "#75FFB1",
      "#47FF9B",
      "#19FF84",
      "#00E776",
      "#00B460",
      "#008B4A",
      "#28e98c",
    ],
  },
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "1600px",
    xxxl: "1800px",
    xxxxl: "2000px",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
