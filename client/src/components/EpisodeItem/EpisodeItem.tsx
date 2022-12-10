import { useMutation } from "@tanstack/react-query";

import { putEpisodeViews } from "@/apis";
import * as S from "@/components/EpisodeItem/styled";
import { EpisodeItemProps } from "@/types/detail";

function transformDate(createdAt: string) {
  const date = new Date(createdAt);

  if (date.getDate().toString().length === 1) {
    return `${date.getFullYear()}.${date.getMonth()}.0${date.getDate()}`;
  }

  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
}

export function EpisodeItem({ episode }: EpisodeItemProps) {
  const { mutate } = useMutation({
    mutationFn: putEpisodeViews,
  });

  const handleEpisodeLinkClick = () => {
    mutate({ id: episode._id });
  };

  return (
    <S.EpisodeLink href={episode.link} onClick={handleEpisodeLinkClick}>
      <S.EpisodeItem>
        <S.Episode>
          <S.EpisodeImgContainer>
            <S.EpisodeImg src={episode.thumbnail} alt='에피소드 썸네일' />
          </S.EpisodeImgContainer>
          <S.EpisodeDesc>
            <div>
              <S.EpisodeTitleContainer>
                <S.EpisodeTitle>{episode.title}</S.EpisodeTitle>
              </S.EpisodeTitleContainer>
              <S.EpisodeDate>{transformDate(episode.createdAt)}</S.EpisodeDate>
            </div>
          </S.EpisodeDesc>
        </S.Episode>
      </S.EpisodeItem>
    </S.EpisodeLink>
  );
}
