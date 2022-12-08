import play from "@/../public/assets/svgs/play.svg";
import star from "@/../public/assets/svgs/star.svg";
import * as S from "@/components/ThemeAnimes/styled";
import { Theme } from "@/types/theme";

export function ThemeAnimes({ themes }: { themes: Theme[] }) {
  const mapedThems = themes.map(
    ({ _id, title, genre, image, story, stars }) => {
      const mapedGenre = genre.map((tag, index) => (
        <S.Tag key={index}>{tag}</S.Tag>
      ));

      return (
        <S.ThemeItem key={_id}>
          <S.ThemeContainer>
            <S.ThemeThumbnailContainer>
              <S.ThemeThumbnail src={image} alt={title} />
            </S.ThemeThumbnailContainer>
            <S.DescConatiner>
              <S.AnimeTitle>{title}</S.AnimeTitle>
              <S.Boxes>
                <S.StarContainer>
                  <S.Star src={star} alt='평점' />
                  &nbsp;평점 {stars}
                </S.StarContainer>
                {mapedGenre}
              </S.Boxes>
              <S.AnimeStory>{story}</S.AnimeStory>
              <S.PlayContainer>
                <S.PlayButton type='button'>
                  <S.PlayIcon src={play} alt='지금 재생' />
                  지금 재생
                </S.PlayButton>
              </S.PlayContainer>
            </S.DescConatiner>
          </S.ThemeContainer>
        </S.ThemeItem>
      );
    },
  );

  return <S.ThemeList>{mapedThems}</S.ThemeList>;
}
