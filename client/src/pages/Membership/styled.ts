import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  height: 34.4rem;
`;

export const Background = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Information = styled.div`
  box-sizing: border-box;
  padding-top: 4.8rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const Desc = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  color: ${({ theme: { colors } }) => colors.membership};
`;

export const Content = styled.main`
  margin: 0 auto;
  width: 118.4rem;
  transform: translateY(-2.4rem);
`;

export const MainInformation = styled.section`
  margin-top: 2.4rem;
`;
