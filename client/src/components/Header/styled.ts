import styled, { css } from "styled-components";

const HeaderScroll = css`
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 1px 0 0 ${({ theme: { colors } }) => colors.cream};

  & a {
    color: ${({ theme: { colors } }) => colors.black};
  }
`;

const HeaderNotScroll = css`
  background-color: transparent;

  & a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Header = styled.header<{ isScroll: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999999999999999;
  font-size: 1.4rem;
  transition: all 0.3s linear;

  ${({ isScroll }) => (isScroll ? HeaderScroll : HeaderNotScroll)}
`;

export const Nav = styled.nav`
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
