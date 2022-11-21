import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
  }
`;
