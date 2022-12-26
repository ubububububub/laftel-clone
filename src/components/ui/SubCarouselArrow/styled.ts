import styled, { css } from "styled-components";

const PrevArrow = css`
  left: 0px;
`;

const NextArrow = css`
  right: 0px;
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
  width: 3.125em;
  height: 10.375em;
  justify-content: center;
  transition: all 250ms;
  border-radius: 0.25em;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.black};
  }

  ${({ prev }) => (prev ? PrevArrow : NextArrow)}
`;

export const ArrowImg = styled.img`
  width: 2em;
  height: 2em;
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 0.25em);
`;
