import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme: { colors } }) => colors.white};
  min-height: 100%;
  padding-top: 6.4rem;
`;

export const Wrapper = styled.div`
  padding: 4.8rem 5rem;
`;

export const TitleWrapper = styled.h2`
  margin: 0px 0px 3.2rem;
  font-size: 3.2rem;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: -0.075rem;
  color: rgb(138, 138, 138);
`;

export const Title = styled.span`
  color: ${({ theme: { colors } }) => colors.black};
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  position: absolute;
  inset: 0px;
`;

export const Desc = styled.div`
  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 2rem;
  line-height: 3.5rem;
  letter-spacing: -1px;
`;

export const AnimesContainer = styled.div`
  display: flex;
  gap: 2em 0.25em;
  font-size: calc(0.82602vw);
  flex-wrap: wrap;
`;
