import styled from "styled-components";

export const Container = styled.section`
  margin-top: 2.4rem;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
  line-height: 1.95rem;

  & h4 {
    font-weight: 700;
  }

  & li::before {
    content: "- ";
  }

  & section + section {
    margin-top: 1.6rem;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 1.3rem;
  font-size: 1.3rem;
  line-height: 1.95rem;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const HelpLink = styled.a`
  text-decoration: underline;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;
