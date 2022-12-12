import styled from "styled-components";

export const Container = styled.section`
  margin: 6.4rem auto 3.2rem;
  width: 1200px;
  padding: 5.6rem 12px 0px;
`;

export const Header = styled.div`
  color: ${({ theme: { colors } }) => colors.filterTitle};
`;

export const ThemesTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 3.2rem;
  font-weight: 800;
`;

export const ThemesDesc = styled.p`
  margin: 1.6rem 0;
  line-height: 2.4rem;
  font-size: 1.4rem;
  white-space: pre-wrap;
`;
