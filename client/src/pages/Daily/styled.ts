import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 6.4rem;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const Container = styled.section`
  max-width: 146.8rem;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-top: 2.4rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4.1rem;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const Schedule = styled.main`
  margin: 2.4rem;
  display: flex;
`;
