import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
