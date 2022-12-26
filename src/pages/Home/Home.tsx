import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Outlet } from "react-router-dom";

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

  const mapedMainTheme = mainCarouselData.themes.map(theme => (
    <MainTheme key={theme._id} title={theme.title} animes={theme.items} />
  ));

  return (
    <S.Container>
      <Outlet />
      <MainCarousel posters={mainCarouselData.posters} />
      <S.Wrapper>
        <MainThemeToggle title='요일별 신작' tabTexts={days} data={dailyData} />
        <MainThemeToggle
          title='라프텔 인기 애니'
          tabTexts={tabs}
          data={mainCarouselData.hots}
          isPopular
        />
        {mapedMainTheme}
        <Ad />
      </S.Wrapper>
    </S.Container>
  );
}
