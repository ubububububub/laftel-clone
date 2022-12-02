import { useState, useRef, useEffect, useLayoutEffect } from "react";

import { SubCarouselCells } from "../SubCarouselCells/SubCarouselCells";

import * as S from "@/components/SubCarousel/styled";
import { SubCarouselArrow } from "@/components/ui";
import { Anime, Time } from "@/types/main";
import { getElementSizePx } from "@/utils";

interface SubCarouselProps {
  animes: Anime[] | Time[];
  isShow: boolean;
  isPopular?: boolean;
}

interface CarouselStatus {
  xPos: number;
  xPosStack: number[];
}

export function SubCarousel({ animes, isShow, isPopular }: SubCarouselProps) {
  const [_, setReRender] = useState(false);
  const carouselStatus = useRef<CarouselStatus>({
    xPos: 0,
    xPosStack: [],
  });
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [isShowArrow, setShowArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleBrowserResize);

    return () => {
      window.removeEventListener("resize", handleBrowserResize);
    };
  }, []);

  useLayoutEffect(() => {
    const cell = cellRef.current as HTMLDivElement;
    const carousel = carouselRef.current as HTMLDivElement;

    if (!cell || !carousel) {
      return;
    }

    const cellWidth = getElementSizePx(cell, "width");
    const cellGap = getElementSizePx(carousel, "row-gap");

    notExceedBrowserWidthSize(cellWidth, cellGap) && setShowArrow(true);
  }, [isShow]);

  const handleBrowserResize = () => {
    const carousel = carouselRef.current as HTMLDivElement;

    if (!carousel) {
      return;
    }

    resetCarouselPos(carousel);
    resetCarouselStatus();
  };

  const resetCarouselStatus = () => {
    carouselStatus.current = { xPos: 0, xPosStack: [] };

    setReRender(current => !current);
  };

  const resetCarouselPos = (carousel: HTMLDivElement) => {
    carousel.style.transform = `translate3d(-${carouselStatus.current.xPos}px, 0px, 0px)`;
  };

  const setDestinationXPos = (carouselSize: number, browserSize: number) => {
    if (carouselSize - carouselStatus.current.xPos < browserSize * 2) {
      carouselStatus.current.xPos +=
        carouselSize - browserSize * Math.floor(carouselSize / browserSize);
      return;
    }

    carouselStatus.current.xPos += browserSize;
  };

  const notExceedBrowserWidthSize = (cellWidth: number, cellGap: number) =>
    (cellWidth + cellGap) * animes.length > window.innerWidth;

  const handleLeftArrowClick = () => {
    const carousel = carouselRef.current as HTMLDivElement;

    if (carouselStatus.current.xPosStack.length === 0) {
      return;
    }

    const xPos = carouselStatus.current.xPosStack.pop() as number;
    carouselStatus.current.xPos = xPos;

    carousel.style.transform = `translate3d(-${xPos}px, 0px, 0px)`;
  };

  const handleRightArrowClick = () => {
    const cell = cellRef.current as HTMLDivElement;
    const carousel = carouselRef.current as HTMLDivElement;

    const cellWidth = getElementSizePx(cell, "width");
    const cellGap = getElementSizePx(carousel, "row-gap");
    const carouselPadding = getElementSizePx(carousel, "padding-left");

    const cellSize = cellGap + cellWidth;
    const totalCellSize = cellSize * animes.length;
    const carouselSize = cellSize * animes.length + carouselPadding;
    const browserSize = window.innerWidth;

    if (
      carouselStatus.current.xPos + browserSize ===
      totalCellSize + carouselPadding
    ) {
      return;
    }

    carouselStatus.current.xPosStack = [
      ...Array.from(
        new Set([
          ...carouselStatus.current.xPosStack,
          carouselStatus.current.xPos,
        ]),
      ),
    ];

    setDestinationXPos(carouselSize, browserSize);

    carousel.style.transform = `translate3d(-${carouselStatus.current.xPos}px, 0px, 0px)`;
  };

  if (!isShow) {
    return null;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Layer>
          <S.CarouselArrowContainer>
            {isShowArrow && (
              <>
                {" "}
                <SubCarouselArrow
                  prev
                  onLeftArrowClick={handleLeftArrowClick}
                />
                <SubCarouselArrow onRightArrowClick={handleRightArrowClick} />
              </>
            )}
            <S.Carousel>
              <S.CarouselContainer ref={carouselRef}>
                <SubCarouselCells
                  animes={animes}
                  {...{ isPopular }}
                  cellRef={cellRef}
                />
              </S.CarouselContainer>
            </S.Carousel>
          </S.CarouselArrowContainer>
        </S.Layer>
      </S.Wrapper>
    </S.Container>
  );
}
