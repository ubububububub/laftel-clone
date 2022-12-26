import styled, { css } from "styled-components";

const ScrollIdColor = css`
  color: ${({ theme: { colors } }) => colors.black};
`;

export const NavList = styled.ul`
  padding-right: 5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Login = styled.li`
  padding: 0 1.4rem;
`;

export const UserId = styled.div<{ isScroll: boolean }>`
  position: relative;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;

  ${({ isScroll }) => isScroll && ScrollIdColor};
`;

export const UserIdContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const UserIdImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  margin-right: 0.8rem;
  display: block;
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 0;
  width: 24.4rem;
  box-shadow: 0px 0px 1.6rem rgba(0, 0, 0, 0.3);
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
  border-radius: 0.4rem;
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};
  cursor: default;
`;

export const UserMenuInfo = styled.div`
  padding: 2.4rem 1.6rem 1.6rem;
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const UserProfileImg = styled.img`
  display: block;
  border-radius: 50%;
  width: 4.4rem;
`;

export const UserMenuId = styled.div`
  margin-left: 0.8rem;
`;

export const UserMenuBar = styled.div`
  height: 0.8rem;
  background-color: ${({ theme: { colors } }) => colors.body};
`;

export const UserMenuList = styled.ul`
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

export const UserMenuItem = styled.li`
  height: 4rem;
  font-size: 1.4rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.purple};
  }
`;
