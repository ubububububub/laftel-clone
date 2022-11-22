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

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
