import styled, { css } from "styled-components";

interface IsFinder {
  isFinder?: boolean;
}

export const SearchAnime = css`
  width: 18.625em;
`;

export const FinderContainer = css`
  width: calc((100% - 25.6rem) / 4);
  height: 25.2rem;
  margin: 2rem 3.2rem;
`;

export const FinderCarouselImgContainer = css`
  width: 100%;
  height: 22.3rem;
`;

export const FinderCarouselImgHeight = css`
  height: 100%;
  object-fit: fill;
`;

export const FinderCarouselDescContainer = css`
  margin-top: 0.4rem;
`;

export const Container = styled.div<IsFinder>`
  cursor: pointer;
  ${({ isFinder }) => isFinder && FinderContainer}
`;

const FinderTitle = css`
  -webkit-line-clamp: 1;
`;

export const CarouselImgContainer = styled.div<IsFinder>`
  flex: 0 0 18.625em;
  width: 18.625em;
  scroll-snap-align: start;

  ${({ isFinder }) => isFinder && FinderCarouselImgContainer}
`;

export const CarouselCell = styled.div<IsFinder>`
  position: relative;
  width: 100%;
  height: 10.375em;
  border-radius: 0.25em;
  margin-bottom: 0.25em;
  overflow: hidden;

  ${({ isFinder }) => isFinder && FinderCarouselImgHeight}
`;

export const CarouselDescContainer = styled.div<IsFinder>`
  display: flex;
  overflow: hidden;

  ${({ isFinder }) => isFinder && FinderCarouselDescContainer}
`;

export const TitleContainer = styled.div<{ isPopular?: boolean }>`
  flex: 1 1 0%;

  ${({ isPopular }) => !isPopular && SearchAnime}
`;

export const CarouselTitle = styled.div`
  font-size: 1.125em;
  line-height: 1.5em;
  letter-spacing: -0.05em;
  color: rgb(18, 18, 18);
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Title = styled.span<IsFinder>`
  font-size: 1.125em;
  line-height: 1.5;
  letter-spacing: -0.045em;
  color: rgb(18, 18, 18);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ isFinder }) => isFinder && FinderTitle}
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

export const CarouselImg = styled.img<IsFinder>`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 10.375em;

  ${({ isFinder }) => isFinder && FinderCarouselImgHeight}
`;
