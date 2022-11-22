import styled, { css } from "styled-components";

export const HeaderScroll = css`
  background-color: ${({ theme: { colors } }) => colors.white};

  & a {
    color: ${({ theme: { colors } }) => colors.black};
  }
`;

export const HeaderNotScroll = css`
  /* background-color: transparent; */
  background-color: black;

  & a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 1.4rem;
  transition: all 0.3s linear;

  ${({ scroll }: { scroll: boolean }) =>
    scroll ? HeaderScroll : HeaderNotScroll}
`;

export const Nav = styled.nav`
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
