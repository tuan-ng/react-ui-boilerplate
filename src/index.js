import React from "react";
import ReactDOM from "react-dom";

import { createGlobalStyle } from "styled-components";

import Page from "./Page.jsx";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const element = (
  <>
    <GlobalStyle />
    <Page />
  </>
);

ReactDOM.render(element, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
