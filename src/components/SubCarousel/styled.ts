import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  width: 100%;
`;

export const Layer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselArrowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  width: 100%;
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
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
