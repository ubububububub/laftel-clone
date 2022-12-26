import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Entrepreneur = styled.div`
  margin: 3.2rem 0.4rem 0.8rem;
  cursor: default;
`;

export const Description = styled.div`
  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 500;

  & p:first-child {
    margin-top: 0.4rem;
  }
`;
