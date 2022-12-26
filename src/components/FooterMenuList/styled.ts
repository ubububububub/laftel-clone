import styled from "styled-components";

export const MenuList = styled.ul`
  gap: 3.2rem;
  display: flex;
  align-items: center;

  & > li:last-child {
    font-weight: 700;
  }
`;

export const MenuLink = styled.a`
  display: block;
`;
