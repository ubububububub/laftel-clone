import { AnimeDetail } from "@/components";
import * as S from "@/components/Animes/styled";
import { AnimesProps, Finder } from "@/types/animes";
import { Anime, Time } from "@/types/main";

export function Animes({ animes, isPopular, cellRef, isFinder }: AnimesProps) {
  if (!animes) {
    return null;
  }

  const getCarouselImg = (anime: Anime | Time | Finder, isFinder?: boolean) => {
    if (!isFinder) {
      return (anime as Time).item
        ? (anime as Time).item.thumbnail
        : (anime as Anime).thumbnail;
    }

    return (anime as Finder).image;
  };

  const getCarouselTitle = (
    anime: Anime | Time | Finder,
    isFinder?: boolean,
  ) => {
    if (!isFinder) {
      return (anime as Time).item
        ? (anime as Time).item.title
        : (anime as Anime).title;
    }

    return (anime as Finder).title;
  };

  const mapedAnimes = animes.map((anime, index) => (
    <S.Container key={anime._id} {...{ isFinder }}>
      <AnimeDetail id={isPopular ? (anime as Time).item._id : anime._id}>
        <>
          <S.CarouselImgContainer {...{ isFinder }}>
            <S.CarouselCell ref={cellRef} {...{ isFinder }}>
              <S.CarouselImg
                {...{ isFinder }}
                src={getCarouselImg(anime, isFinder)}
                alt={getCarouselTitle(anime, isFinder)}
              />
            </S.CarouselCell>
          </S.CarouselImgContainer>
          <S.CarouselDescContainer {...{ isFinder }}>
            {isPopular && (
              <S.RankingContainer>
                <S.Ranking>{index + 1}</S.Ranking>
              </S.RankingContainer>
            )}
            <S.TitleContainer {...{ isPopular }}>
              <S.CarouselTitle>
                <S.Title {...{ isFinder }}>
                  {(anime as Time).item
                    ? (anime as Time).item.title
                    : (anime as Anime).title}
                </S.Title>
                {isPopular && (
                  <S.Genre>{(anime as Time).item.genre.join("/")}</S.Genre>
                )}
              </S.CarouselTitle>
            </S.TitleContainer>
          </S.CarouselDescContainer>
        </>
      </AnimeDetail>
    </S.Container>
  ));

  return <>{mapedAnimes}</>;
}
