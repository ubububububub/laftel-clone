import styled, { css } from "styled-components";

const Title = css`
  margin: 0px 0px 0.8rem;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.gray};
`;

const Rating = css`
  color: ${({ theme: { colors } }) => colors.black};
`;

export const MyStarContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export const MyStarTitle = styled.h3`
  ${Title};
`;

export const MyStarContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;

export const MyStarRating = styled.div<{ rating: string }>`
  font-weight: bold;
  font-size: 3.2rem;
  transition: color 350ms ease-in-out 0s;
  color: ${({ theme: { colors } }) => colors.inputCursor};

  ${({ rating }) => rating !== "0" && Rating}
`;

export const MyStarDesc = styled.div<{ rating?: string }>`
  font-size: 1.4rem;
  transition: color 350ms ease-in-out 0s;
  color: ${({ theme: { colors } }) => colors.reviewDesc};

  ${({ rating }) => rating !== "0" && Rating}
`;

export const MyStars = styled.div`
  margin-top: 0.8rem;
  margin-left: -0.5rem;
  max-width: 18rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
`;

export const MyStar = styled.span`
  margin-left: -0.25rem;
  margin-right: -0.25rem;
`;
