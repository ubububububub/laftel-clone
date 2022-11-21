import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
`;

export const Character = styled.img`
  width: 32.2rem;
  height: 28.7rem;
  display: block;
`;

export const Warning = styled.div`
  margin-left: 7.2rem;
  color: ${({ theme: { colors } }) => colors.notfound};
`;

export const Title = styled.h2`
  margin: 1.9rem 0 1.6rem;
  font-weight: 700;
  font-size: 2.3rem;
`;

export const Strong = styled.strong`
  color: ${({ theme: { colors } }) => colors.notfoundStrong};
`;

export const Description = styled.p`
  margin-bottom: 5rem;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

export const FinderLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme: { colors } }) => colors.notfound};
`;

export const HomeLink = styled(Link)`
  width: 16rem;
  height: 5.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.notfoundStrong};
  font-weight: 700;
  font-size: 1.8rem;
  border-radius: 4px;
`;
