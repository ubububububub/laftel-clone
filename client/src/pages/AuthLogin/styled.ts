import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 3.6rem;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Desc = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
`;

export const EmailLoginLink = styled(Link)`
  width: 100%;
  height: 4.8rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.purple};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverPurPle};
  }
`;

export const Letter = styled.img`
  position: absolute;
  display: block;
  left: 1.4rem;
`;

export const MenuList = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const MenuLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.white};
`;
