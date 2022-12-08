import { SubCarousel } from "@/components";
import * as S from "@/components/MainTheme/styled";
import { Anime } from "@/types/main";

interface MainThemeProps {
  title: string;
  animes: Anime[];
}

export function MainTheme({ title, animes }: MainThemeProps) {
  return (
    <S.Container>
      <S.DescContainer>
        <S.Title>{title}</S.Title>
      </S.DescContainer>
      <SubCarousel {...{ animes }} isShow />
    </S.Container>
  );
}
