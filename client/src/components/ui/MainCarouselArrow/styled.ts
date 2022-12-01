import styled, { css } from "styled-components";

const PrevArrow = css`
  left: 0px;
  padding-left: 0.5em;
`;

const NextArrow = css`
  right: 0px;
  padding-right: 0.5em;
`;

const SubArrow = css`
  padding: 0;
  width: 3.125em;
  height: 10.375em;
  justify-content: center;
  transition: all 250ms;
  border-radius: 0.25em;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.black};
  }
`;

export const Container = styled.div<{ prev?: boolean; sub?: boolean }>`
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
  ${({ sub }) => sub && SubArrow}

  &::before {
    content: "";
  }
`;

export const ArrowImg = styled.img`
  width: 2em;
  height: 2em;
  filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 0.25em);
`;
