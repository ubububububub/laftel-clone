import { useMutation } from "@tanstack/react-query";

import { putEpisodeViews } from "@/apis";
import * as S from "@/components/EpisodeItem/styled";
import { EpisodeItemProps } from "@/types/detail";
import { transformDate } from "@/utils";

export function EpisodeItem({ episode }: EpisodeItemProps) {
  const { mutate } = useMutation({
    mutationFn: putEpisodeViews,
  });

  const handleEpisodeLinkClick = () => {
    mutate({ id: episode._id });
  };

  return (
    <S.EpisodeLink
      href={episode.link}
      target='_blank'
      onClick={handleEpisodeLinkClick}>
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
