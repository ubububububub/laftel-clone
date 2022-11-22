import styled, { css } from "styled-components";

const TextBold = css`
  font-weight: 700;
`;

export const Container = styled.section`
  margin-top: 2.4rem;
  font-size: 1.3rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
  line-height: 1.95rem;

  & h4 {
    ${TextBold}
  }

  & li::before {
    content: "- ";
  }

  & section + section {
    margin-top: 1.6rem;
  }
`;

export const Title = styled.h3`
  ${TextBold}
  margin-bottom: 1.3rem;
  font-size: 1.3rem;
  line-height: 1.95rem;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const Strong = styled.strong`
  ${TextBold}
`;

export const HelpLink = styled.a`
  text-decoration: underline;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;
