import { useRef } from "react";

import * as S from "@/components/SubCarousel/styled";
import { SubCarouselArrow } from "@/components/ui";
import { useDailyAnimes } from "@/hooks";
import { getElementSizePx } from "@/utils";

const getDestinationXPos = (
  cellGap: number,
  cellWidth: number,
  length: number,
  carouselPaddingLeft: number,
) => {
  return (
    (cellGap + cellWidth) * length - window.innerWidth + carouselPaddingLeft
  );
};

export function SubCarousel() {
  const { data } = useDailyAnimes();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cellRef = useRef<HTMLDivElement | null>(null);

  if (!data) {
    return <div>asdas</div>;
  }

  const handleLeftArrowClick = () => {
    const carousel = carouselRef.current as HTMLDivElement;

    carousel.style.transform = `translate3d(0px, 0px, 0px)`;
  };

  const handleRightArrowClick = () => {
    const cell = cellRef.current as HTMLDivElement;
    const carousel = carouselRef.current as HTMLDivElement;

    const cellWidth = getElementSizePx(cell, "width");
    const cellGap = getElementSizePx(carousel, "row-gap");
    const carouselPaddingLeft = getElementSizePx(carousel, "padding-left");

    const destinationXPos = getDestinationXPos(
      cellGap,
      cellWidth,
      data.thu.length,
      carouselPaddingLeft,
    );

    carousel.style.transform = `translate3d(-${destinationXPos}px, 0px, 0px)`;
  };

  const mapedAnimes = data.thu.map(anime => (
    <S.CarouselContainer key={anime._id}>
      <S.CarouselImgContainer>
        <S.E ref={cellRef}>
          <S.CarouselImg src={anime.thumnail} alt={anime.title} />
        </S.E>
      </S.CarouselImgContainer>
      <S.CarouselTitleContainer>
        <S.CarouselTitle>{anime.title}</S.CarouselTitle>
      </S.CarouselTitleContainer>
    </S.CarouselContainer>
  ));

  return (
    <S.Container>
      <S.Carousel>
        <S.A>
          <S.B>
            <SubCarouselArrow prev onLeftArrowClick={handleLeftArrowClick} />
            <SubCarouselArrow onRightArrowClick={handleRightArrowClick} />
            <S.C>
              <S.D ref={carouselRef}>{mapedAnimes}</S.D>
            </S.C>
          </S.B>
        </S.A>
      </S.Carousel>
    </S.Container>
  );
}
