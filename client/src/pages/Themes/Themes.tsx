import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getThemes } from "@/apis";
import { ThemeCells } from "@/components";
import {
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Themes/styled";
import { ThemesQuery } from "@/types/themes";

export function Themes() {
  useNewTitle("테마별 애니, 만화, 웹툰 추천");
  useFooterToggle();
  useFixScroll();
  useSearchBox();

  const { data } = useQuery<ThemesQuery[], AxiosError>({
    queryKey: ["Themes"],
    queryFn: getThemes,
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
        <ThemeCells themes={data} />
      </S.Themes>
    </S.Container>
  );
}
