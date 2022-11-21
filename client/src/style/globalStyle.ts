import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${({ theme: { colors } }) => colors.black};
    height: 100%;
  }

  a {
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
  }


  button {
    outline: none;
    border: none;
  }
`;
