import * as S from "@/components/Themes/styled";
import { ThemeQuery } from "@/types/themes";

type ThemesProps = ThemeQuery;

export function Themes({ themes }: { themes: ThemesProps[] }) {
  const mapedThemes = themes.map((theme, index) => (
    <S.ContainerLink key={theme._id}>
      <S.BoardContainer onClick={() => {}}>
        <S.Board>
          <S.ThemeImgs>
            <S.ThemeFirstImg />
            <S.ThemeSecondImg />
            <S.ThemeThirdImg />
          </S.ThemeImgs>
        </S.Board>
        <S.DescContainer>
          <S.Desc>{theme.title}</S.Desc>
        </S.DescContainer>
      </S.BoardContainer>
    </S.ContainerLink>
  ));

  return <>{mapedThemes}</>;
}
