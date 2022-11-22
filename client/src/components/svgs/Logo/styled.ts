import styled, { css } from "styled-components";

const Size = css`
  width: auto;
  height: 6.5rem;
`;

export const Svg = styled.svg`
  ${({ login }: { login: boolean }) => login && Size}}
`;
