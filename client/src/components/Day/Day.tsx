import * as S from "@/components/Day/styled";
import { DayArgs } from "@/types/daily";

export function Day({ animes, day, today }: DayArgs) {
  const mapedAnimes = animes.map((anime, index) => (
    <S.AnimeItem key={index}>
      <div>
        <S.Thumbnail src={anime.thumnail} alt='asd' />
        <S.AnimeTitle>{anime.title}</S.AnimeTitle>
      </div>
    </S.AnimeItem>
  ));

  return (
    <S.Container {...{ today }}>
      <S.DayTitle {...{ today }}>{day}</S.DayTitle>
      <ul>{mapedAnimes}</ul>
    </S.Container>
  );
}
