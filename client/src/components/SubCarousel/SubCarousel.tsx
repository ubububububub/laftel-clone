import { useState, useRef, useEffect, useLayoutEffect } from "react";

import { Animes } from "../Animes/Animes";

import * as S from "@/components/SubCarousel/styled";
import { SubCarouselArrow } from "@/components/ui";
import { Anime, Time } from "@/types/main";
import { getElementSizePx } from "@/utils";

interface SubCarouselProps {
  animes: Anime[] | Time[];
  isShow: boolean;
  isPopular?: boolean;
}

export function SubCarousel({ animes, isShow, isPopular }: SubCarouselProps) {
  const [_, setReRender] = useState(false);
  const carouselXPos = useRef(0);
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
    carouselXPos.current = 0;

    setReRender(current => !current);
  };

  const resetCarouselPos = (carousel: HTMLDivElement) => {
    carousel.style.transform = `translate3d(-${carouselXPos.current}px, 0px, 0px)`;
  };

  const notExceedBrowserWidthSize = (cellWidth: number, cellGap: number) =>
    (cellWidth + cellGap) * animes.length > window.innerWidth;

  const handleLeftArrowClick = () => {
    const carousel = carouselRef.current as HTMLDivElement;

    const browserSize = window.innerWidth;

    if (carouselXPos.current < browserSize) {
      carouselXPos.current -= carouselXPos.current;
    } else {
      carouselXPos.current -= browserSize;
    }

    carousel.style.transform = `translate3d(-${carouselXPos.current}px, 0px, 0px)`;
  };

  const handleRightArrowClick = () => {
    const cell = cellRef.current as HTMLDivElement;
    const carousel = carouselRef.current as HTMLDivElement;

    const cellWidth = getElementSizePx(cell, "width");
    const cellGap = getElementSizePx(carousel, "row-gap");
    const carouselPadding = getElementSizePx(carousel, "padding-left");

    const cellSize = cellGap + cellWidth;
    const carouselSize = cellSize * animes.length + carouselPadding;
    const browserSize = window.innerWidth;

    if (carouselXPos.current + browserSize + browserSize > carouselSize) {
      carouselXPos.current +=
        carouselSize - (carouselXPos.current + browserSize);
    } else {
      carouselXPos.current += browserSize;
    }

    carousel.style.transform = `translate3d(-${carouselXPos.current}px, 0px, 0px)`;
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
                <Animes animes={animes} cellRef={cellRef} {...{ isPopular }} />
              </S.CarouselContainer>
            </S.Carousel>
          </S.CarouselArrowContainer>
        </S.Layer>
      </S.Wrapper>
    </S.Container>
  );
}
