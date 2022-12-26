import styled, { css } from "styled-components";

const LoginSize = css`
  width: auto;
  height: 6.5rem;
`;
const AuthSize = css`
  width: auto;
  height: 4.4rem;
`;

export const Svg = styled.svg<{ login: boolean; auth: boolean }>`
  ${({ login }) => login && LoginSize}
  ${({ auth }) => auth && AuthSize}
`;
