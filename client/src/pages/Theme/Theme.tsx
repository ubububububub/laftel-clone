import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getTheme } from "@/apis";
import { Themes } from "@/components";
import {
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Theme/styled";
import { ThemeQuery } from "@/types/themes";

export function Theme() {
  useNewTitle("테마별 애니, 만화, 웹툰 추천");
  useFooterToggle();
  useFixScroll();
  useSearchBox();

  const { data } = useQuery<ThemeQuery[], AxiosError>({
    queryKey: ["Theme"],
    queryFn: getTheme,
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
  });

  if (!data) {
    return null;
  }

  return (
    <S.Container>
      <S.Title>테마추천 전체 리스트</S.Title>
      <S.Themes>
        <Themes themes={data} />
      </S.Themes>
    </S.Container>
  );
}
