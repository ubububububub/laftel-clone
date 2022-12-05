import { useNavigate } from "react-router-dom";

import * as S from "@/components/ThemeCells/styled";
import { ThemeQuery } from "@/types/themes";

type ThemesProps = ThemeQuery;

type Theme = ThemeQuery;

export function ThemeCells({ themes }: { themes: ThemesProps[] }) {
  const navigate = useNavigate();

  const handleThemeClick = (id: string, title: string) => {
    navigate(`/theme/${id}/${title}`);
  };

  const mapedThemes = themes.map(({ _id, images, title }: Theme) => (
    <S.ContainerLink key={_id}>
      <S.BoardContainer
        onClick={() => {
          handleThemeClick(_id, title);
        }}>
        <S.Board>
          <S.ThemeImgs>
            <S.ThemeFirstImg image={images[0]} />
            <S.ThemeSecondImg image={images[1]} />
            <S.ThemeThirdImg image={images[2]} />
          </S.ThemeImgs>
        </S.Board>
        <S.DescContainer>
          <S.Desc>{title}</S.Desc>
        </S.DescContainer>
      </S.BoardContainer>
    </S.ContainerLink>
  ));

  return <>{mapedThemes}</>;
}
