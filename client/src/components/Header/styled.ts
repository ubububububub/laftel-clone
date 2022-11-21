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

export const Header = styled.header<{ scroll: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 1.4rem;
  transition: all 0.3s linear;

  ${({ scroll }) => (scroll ? HeaderScroll : HeaderNotScroll)}
`;

export const Nav = styled.nav`
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeftList = styled.ul`
  padding-left: 3.125rem;
  gap: 2.4rem;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const NavRightList = styled.ul`
  padding-right: 3.125rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  font-weight: 800;
`;

export const NavLeftIconItem = styled.li`
  /* flex: 1; */
`;

export const Login = styled.li`
  padding: 0 1.4rem;
`;
