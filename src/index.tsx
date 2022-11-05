import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/Wrapper";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Wrapper />
  </ThemeProvider>
);
