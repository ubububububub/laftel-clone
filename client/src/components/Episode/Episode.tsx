import * as S from "@/components/Episode/styled";

export function Episode() {
  return (
    <S.EpisodeContainer>
      <S.EpisodeHeader>
        <S.AnimeTitle>(더빙) 고스트 게임 : 디지몬</S.AnimeTitle>
      </S.EpisodeHeader>
      <S.EpisodeList>
        {/* 에피소드 */}
        <S.EpisodeItem>
          <S.Episode>
            <S.EpisodeImgContainer>
              <S.EpisodeImg
                src='https://thumbnail.laftel.net/assets/2022/08/59807/v15/Thumbnail.0000056.jpg'
                alt='에피소드 썸네일'
              />
            </S.EpisodeImgContainer>
            <S.EpisodeDesc>
              <div>
                <S.EpisodeTitleContainer>
                  <S.EpisodeTitle>1화 입 꿰맨 남자</S.EpisodeTitle>
                </S.EpisodeTitleContainer>
                <S.EpisodeDate>2022.08.03</S.EpisodeDate>
              </div>
            </S.EpisodeDesc>
          </S.Episode>
        </S.EpisodeItem>{" "}
        <S.EpisodeItem>
          <S.Episode>
            <S.EpisodeImgContainer>
              <S.EpisodeImg
                src='https://thumbnail.laftel.net/assets/2022/08/59807/v15/Thumbnail.0000056.jpg'
                alt='에피소드 썸네일'
              />
            </S.EpisodeImgContainer>
            <S.EpisodeDesc>
              <div>
                <S.EpisodeTitleContainer>
                  <S.EpisodeTitle>1화 입 꿰맨 남자</S.EpisodeTitle>
                </S.EpisodeTitleContainer>
                <S.EpisodeDate>2022.08.03</S.EpisodeDate>
              </div>
            </S.EpisodeDesc>
          </S.Episode>
        </S.EpisodeItem>
      </S.EpisodeList>
    </S.EpisodeContainer>
  );
}
