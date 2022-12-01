import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  font-size: calc(0.82602vw);
`;

export const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  width: 100%;
`;

export const CarouselContainer = styled.div``;

export const CarouselImg = styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  height: 10.375em;
`;

export const A = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const B = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  width: 100%;
`;

export const C = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const D = styled.div`
  padding: 0px 3.125em;
  width: 100%;
  display: flex;
  min-height: 14em;
  gap: 0.325em;
  overflow-x: visible;
  flex-wrap: nowrap;
  transition: transform 350ms;
  transform: translate3d(0px, 0px, 0px);
`;

export const E = styled.div`
  /* margin-left: 5px; */
  position: relative;
  width: 100%;
  height: 10.375em;
  border-radius: 0.25em;
  margin-bottom: 0.25em;
  overflow: hidden;
`;

export const CarouselImgContainer = styled.div`
  flex: 0 0 18.625em;
  width: 18.625em;
  scroll-snap-align: start;
  cursor: pointer;
`;

export const CarouselTitleContainer = styled.div`
  width: 17.75em;
  overflow: hidden;
  height: 3.375em;
`;

export const CarouselTitle = styled.div`
  font-size: 1.125em;
  line-height: 1.5em;
  letter-spacing: -0.05em;
  color: rgb(18, 18, 18);
  text-overflow: ellipsis;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
