import styled from "styled-components";

export const Footer = styled.footer`
  padding: 4.8rem 5rem;
  min-height: 9.6rem;
  max-height: 18.7rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.footer};
  font-size: 1.4rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Texts = styled.ul`
  gap: 3.2rem;
  display: flex;
  align-items: center;

  & > li:last-child {
    font-weight: 700;
  }
`;

export const Icons = styled.ul`
  margin-left: 1.7565rem;
  gap: 1.6rem;
  display: flex;
  align-items: center;
`;

export const CLink = styled.a`
  display: block;
`;

export const Description = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
`;

export const InfoDisplay = styled.div`
  margin: 3.2rem 0.4rem 0.8rem;
`;

export const Toggle = styled.div``;

export const InfoContent = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;

  & p:first-child {
    margin-top: 0.4rem;
  }
`;
