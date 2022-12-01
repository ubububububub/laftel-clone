import Slider from "react-slick";

import * as S from "@/components/MainCarousel/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainCarouselArrow } from "@/components/ui";
import { Poster } from "@/types/main";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  nextArrow: <MainCarouselArrow />,
  prevArrow: <MainCarouselArrow prev />,
};

export function MainCarousel({ posters }: { posters: Poster[] }) {
  const mapedPosters = posters.map(poster => (
    <S.CarouselContainer key={poster._id}>
      <S.DescContainer>
        <S.LogoImg src={poster.logo} alt='로고' />
        <S.Desc>{poster.content}</S.Desc>
        <S.CarouselButton type='button'>{poster.buttonText}</S.CarouselButton>
      </S.DescContainer>
      <S.CarosuselBackground src={poster.image} />
    </S.CarouselContainer>
  ));

  return (
    <S.Container>
      <Slider {...settings}>{mapedPosters}</Slider>
    </S.Container>
  );
}
