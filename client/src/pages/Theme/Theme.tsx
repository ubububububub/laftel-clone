import { useParams } from "react-router-dom";

import play from "@/../public/assets/svgs/play.svg";
import * as S from "@/pages/Theme/styled";

export function Theme() {
  const { id, title } = useParams();

  return (
    <S.Container>
      <S.Header>
        <S.ThemesTitle>{title}</S.ThemesTitle>
        <S.ThemesDesc>asdasdasd</S.ThemesDesc>
        <S.ThemeList>
          <li>
            <S.ThemeContainer>
              <S.ThemeImg src='' alt='' />
              <S.DescConatiner>
                <S.AnimeTitle>sadas</S.AnimeTitle>
                <S.AnimeStory>asdas</S.AnimeStory>
                <S.PlayContainer>
                  <S.PlayLink href=''>
                    <S.PlayIcon src={play} alt='지금 재생' />
                    지금 재생
                  </S.PlayLink>
                </S.PlayContainer>
              </S.DescConatiner>
            </S.ThemeContainer>
          </li>
        </S.ThemeList>
      </S.Header>
    </S.Container>
  );
}
