import * as S from "@/components/SubCarouselCells/styled";
import { Anime, Time } from "@/types/main";

export function SubCarouselCells({
  animes,
  isPopular,
  cellRef,
  isFinder,
}: {
  animes?: Anime[] | Time[];
  isPopular?: boolean;
  cellRef?: React.MutableRefObject<HTMLDivElement | null>;
  isFinder?: boolean;
}) {
  if (!animes) {
    return null;
  }

  const mapedAnimes = animes.map((anime, index) => (
    <S.Container key={anime._id} {...{ isFinder }}>
      <S.CarouselImgContainer {...{ isFinder }}>
        <S.CarouselCell ref={cellRef} {...{ isFinder }}>
          <S.CarouselImg
            {...{ isFinder }}
            src={
              (anime as Time).item
                ? (anime as Time).item.thumbnail
                : (anime as Anime).thumbnail
            }
            alt={
              (anime as Time).item
                ? (anime as Time).item.title
                : (anime as Anime).title
            }
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
    </S.Container>
  ));

  return <>{mapedAnimes}</>;
}
