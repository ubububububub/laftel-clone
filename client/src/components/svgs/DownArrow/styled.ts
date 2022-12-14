import styled, { css } from "styled-components";

const SvgRotate = css`
  transform: rotate(0deg);
`;

export const Svg = styled.svg<{ isHover: boolean }>`
  margin-left: 1.4rem;
  transition: all 0.2s;
  transform: rotate(180deg);
  width: 1.6rem;

  ${({ isHover }) => isHover && SvgRotate}
`;
