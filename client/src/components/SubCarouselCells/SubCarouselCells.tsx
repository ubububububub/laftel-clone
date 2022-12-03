import * as S from "@/components/SubCarouselCells/styled";
import { Anime, Time } from "@/types/main";

export function SubCarouselCells({
  animes,
  isPopular,
  cellRef,
  isSearch,
}: {
  animes?: Anime[] | Time[];
  isPopular?: boolean;
  cellRef?: React.MutableRefObject<HTMLDivElement | null>;
  isSearch?: boolean;
}) {
  if (!animes) {
    return null;
  }

  const mapedAnimes = animes.map((anime, index) => (
    <div key={anime._id}>
      <S.CarouselImgContainer>
        <S.CarouselCell ref={cellRef}>
          <S.CarouselImg
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
      <S.CarouselDescContainer>
        {isPopular && (
          <S.RankingContainer>
            <S.Ranking>{index + 1}</S.Ranking>
          </S.RankingContainer>
        )}
        <S.TitleContainer {...{ isSearch }}>
          <S.CarouselTitle>
            <S.Title>
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
    </div>
  ));

  return <>{mapedAnimes}</>;
}
