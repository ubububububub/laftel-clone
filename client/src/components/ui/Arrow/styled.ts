import styled, { css } from "styled-components";

const PrevArrow = css`
  left: 0px;
  padding-left: 0.5em;
`;

const NextArrow = css`
  right: 0px;
  padding-right: 0.5em;
`;

export const Container = styled.div<{ prev?: boolean }>`
  opacity: 0.6;
  z-index: 1;
  position: absolute;
  top: 0px;
  bottom: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  ${({ prev }) => (prev ? PrevArrow : NextArrow)}

  &::before {
    content: "";
  }
`;

export const ArrowImg = styled.img`
  width: 3.2em;
  height: 3.2em;
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 0.25em);
`;
