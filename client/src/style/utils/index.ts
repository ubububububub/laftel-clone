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
