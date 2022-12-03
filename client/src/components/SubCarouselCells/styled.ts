import styled, { css } from "styled-components";

export const SearchAnime = css`
  width: 18.625em;
`;

export const CarouselImgContainer = styled.div`
  flex: 0 0 18.625em;
  width: 18.625em;
  scroll-snap-align: start;
  cursor: pointer;
`;

export const CarouselCell = styled.div`
  position: relative;
  width: 100%;
  height: 10.375em;
  border-radius: 0.25em;
  margin-bottom: 0.25em;
  overflow: hidden;
`;

export const CarouselDescContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 5.1875em;
`;

export const TitleContainer = styled.div<{ isSearch?: boolean }>`
  flex: 1 1 0%;

  ${({ isSearch }) => isSearch && SearchAnime}
`;

export const CarouselTitle = styled.div`
  font-size: 1.125em;
  line-height: 1.5em;
  letter-spacing: -0.05em;
  color: rgb(18, 18, 18);
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Title = styled.span`
  font-size: 1.125em;
  line-height: 1.5;
  letter-spacing: -0.045em;
  color: rgb(18, 18, 18);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Genre = styled.span`
  margin-top: 0.11111em;
  font-size: 1em;
  line-height: 1.5;
  letter-spacing: -0.0444em;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const RankingContainer = styled.div`
  margin-top: -0.125em;
  margin-right: 0.7em;
`;

export const Ranking = styled.span`
  font-weight: bold;
  font-size: 2.5em;
  line-height: 1.5;
  letter-spacing: -0.04em;
`;

export const CarouselImg = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 10.375em;
`;
