import Slider from "react-slick";

import { AnimeDetail } from "@/components";
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
  // map에 poster.isLink가 true이면 AnimeDetail 뺴고 렌더
  // map에 poster.isLink가 false이면 AnimeDetail 포함하고 렌더

  const mapedPosters = posters.map(poster => (
    <S.CarouselContainer key={poster._id}>
      <AnimeDetail id={poster._id}>
        <>
          <S.DescContainer>
            <S.LogoImg src={poster.logo} alt='로고' />
            <S.Desc>{poster.content}</S.Desc>
            <S.CarouselButton type='button'>
              <S.ButtonText>{poster.buttonText}</S.ButtonText>
            </S.CarouselButton>
          </S.DescContainer>
          <S.CarosuselBackground src={poster.image} />
        </>
      </AnimeDetail>
    </S.CarouselContainer>
  ));

  return (
    <S.Container>
      <Slider {...settings}>{mapedPosters}</Slider>
    </S.Container>
  );
}
