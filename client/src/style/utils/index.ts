import { css } from "styled-components";

export const DisableButton = css`
  width: 100%;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 4px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.cream};
`;

export const ActiveButton = css`
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.purple};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverPurPle};
  }
`;

export const ScrollBar = css`
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    border-radius: 10px;
    background-color: ${({ theme: { colors } }) => colors.inputCursor};
  }
`;
