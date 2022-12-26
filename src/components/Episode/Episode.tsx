import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getEpisode } from "@/apis";
import { EpisodeItem } from "@/components";
import * as S from "@/components/Episode/styled";
import { EpisodeProps, EpisodeQuery } from "@/types/detail";

export function Episode({ data }: EpisodeProps) {
  const { data: episodeData } = useQuery<EpisodeQuery[], AxiosError>({
    queryKey: ["episode", data._id],
    queryFn: () => getEpisode(data._id),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (typeof episodeData === "undefined") {
    return null;
  }

  if (!episodeData) {
    return null;
  }

  const mapedEpisodeData = episodeData.map(episode => (
    <EpisodeItem key={episode._id} {...{ episode }} />
  ));

  return (
    <S.EpisodeContainer>
      <S.EpisodeHeader>
        <S.AnimeTitle>{data.title}</S.AnimeTitle>
      </S.EpisodeHeader>
      <S.EpisodeList>{mapedEpisodeData}</S.EpisodeList>
    </S.EpisodeContainer>
  );
}
