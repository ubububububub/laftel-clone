import { AnimeDetail } from "../AnimeDetail/AnimeDetail";

import * as S from "@/components/Day/styled";
import { DayArgs } from "@/types/daily";

export function Day({ animes, day, today }: DayArgs) {
  const mapedAnimes = animes.map((anime, index) => (
    <S.AnimeItem key={index}>
      <AnimeDetail id={anime._id}>
        <div>
          <S.Thumbnail src={anime.thumbnail} alt={anime.title} />
          <S.AnimeTitle>{anime.title}</S.AnimeTitle>
        </div>
      </AnimeDetail>
    </S.AnimeItem>
  ));

  return (
    <S.Container {...{ today }}>
      <S.DayTitle {...{ today }}>{day}</S.DayTitle>
      <ul>{mapedAnimes}</ul>
    </S.Container>
  );
}
