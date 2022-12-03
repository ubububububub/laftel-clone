import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMainAnimes } from "@/apis";
import { Ad, MainCarousel, MainTheme, MainThemeToggle } from "@/components";
import {
  useDailyAnimes,
  useHeaderWhite,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Home/styled";
import { MainQuery } from "@/types/main";

const days = ["월", "화", "수", "목", "금", "토", "일"];
const tabs = ["실시간", "역대"];

export function Home() {
  useNewTitle("라프텔 - 애니 추천 · 애니 스트리밍 서비스");
  useHeaderWhite();
  useSearchBox();
  const { data: mainCarouselData } = useQuery<MainQuery, AxiosError>({
    queryKey: ["main"],
    queryFn: getMainAnimes,
    staleTime: 60000 * 60,
  });
  const { data: dailyData } = useDailyAnimes();

  if (!mainCarouselData || !dailyData) {
    return null;
  }

  return (
    <S.Container>
      <MainCarousel posters={mainCarouselData.posters} />
      <S.Wrapper>
        <MainThemeToggle title='요일별 신작' tabTexts={days} data={dailyData} />
        <MainThemeToggle
          title='라프텔 인기 애니'
          tabTexts={tabs}
          data={mainCarouselData.hots}
          isPopular
        />
        <MainTheme
          title='덕업일치! 라프텔 팀원들이 추천하는 작품'
          animes={dailyData.mon}
        />
        <MainTheme
          title='언제나 기대하게 만드는 제작사, 본즈에 어서오세요'
          animes={dailyData.tue}
        />
        <MainTheme
          title='보기만 해도 행복한 먹방 그 자체'
          animes={dailyData.wed}
        />
        <MainTheme
          title='2021년 2분기 완결 작품 베스트 10'
          animes={dailyData.thu}
        />
        <MainTheme title='세상의 운명을 짊어진 아이들' animes={dailyData.fri} />
        <MainTheme title='미지의 존재, 미지의 세계' animes={dailyData.sat} />
        <MainTheme
          title='안녕히 계세요~ 전 세상의 고통을 떠나 이세계로 갑니다'
          animes={dailyData.sun}
        />
        <Ad />
      </S.Wrapper>
    </S.Container>
  );
}
