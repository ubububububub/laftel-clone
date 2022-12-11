import { useNavigate } from "react-router-dom";

import * as S from "@/components/ThemeCells/styled";
import { ThemesQuery } from "@/types/themes";

type ThemesProps = ThemesQuery;

type Theme = ThemesQuery;

export function ThemeCells({ themes }: { themes: ThemesProps[] }) {
  const navigate = useNavigate();

  const handleThemeClick = (id: string, title: string) => {
    navigate(`/themes/${id}/${title}`);
  };

  const mapedThemes = themes.map(({ _id, images, title }: Theme) => {
    const [firstImg, secondImg, thirdImage] = images;

    return (
      <S.ContainerLink key={_id}>
        <S.BoardContainer
          onClick={() => {
            handleThemeClick(_id, title);
          }}>
          <S.Board>
            <S.ThemeImgs>
              <S.ThemeFirstImg image={firstImg} />
              <S.ThemeSecondImg image={secondImg} />
              <S.ThemeThirdImg image={thirdImage} />
            </S.ThemeImgs>
            <S.Blur image={firstImg} />
          </S.Board>
          <S.DescContainer>
            <S.Desc>{title}</S.Desc>
          </S.DescContainer>
        </S.BoardContainer>
      </S.ContainerLink>
    );
  });

  return <>{mapedThemes}</>;
}
