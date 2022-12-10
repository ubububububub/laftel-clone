import styled, { css } from "styled-components";

const Title = css`
  margin: 0px 0px 0.8rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const StarAverageContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export const StarAverageTitle = styled.h3`
  ${Title};
`;

export const StarAverage = styled.div`
  font-weight: bold;
  font-size: 3.2rem;
  transition: color 350ms ease-in-out 0s;
`;

export const StarAverageCount = styled.div`
  font-size: 0.875rem;
  transition: color 350ms ease-in-out 0s;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const StarAverageStars = styled.div`
  position: relative;
  margin-top: 0.8rem;
  display: flex;
  width: 18rem;
  height: 4rem;
  clip-path: url(#star_clip_path);
  background-color: ${({ theme: { colors } }) => colors.membership};
  will-change: transform;
  transform: translateZ(0px);
`;

export const AverageBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.purple};
  will-change: transform;
  transition: transform 350ms ease-in-out 0s;
  transform: translateX(-12%);
`;
