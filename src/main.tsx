import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import "./index.css";
import { themeToVars } from "@mantine/vanilla-extract";
import GlobalProvider from "./context/index.tsx";
import { Notifications } from "@mantine/notifications";

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
    xxl: "1600px",
    xxxl: "1800px",
    xxxxl: "2000px",
  },
});

export const vars = themeToVars(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <MantineProvider theme={theme}>
        <BrowserRouter>
          <Notifications />
          <App />
        </BrowserRouter>
      </MantineProvider>
    </GlobalProvider>
  </React.StrictMode>
);
