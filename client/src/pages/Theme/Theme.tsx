import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Outlet, useParams } from "react-router-dom";

import { getTheme } from "@/apis";
import { ThemeAnimes } from "@/components";
import {
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Theme/styled";
import { ThemeQuery } from "@/types/theme";

export function Theme() {
  const { id, themetitle } = useParams();

  if (!id || !themetitle) {
    return null;
  }

  useNewTitle(themetitle);
  useFooterToggle();
  useFixScroll();
  useSearchBox();

  const { data } = useQuery<ThemeQuery, AxiosError>({
    queryKey: ["theme", id],
    queryFn: () => getTheme(id),
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (!data) {
    return null;
  }

  return (
    <S.Container>
      <S.Header>
        <Outlet />
        <S.ThemesTitle>{themetitle}</S.ThemesTitle>
        <S.ThemesDesc>asdasdasd</S.ThemesDesc>
        <ThemeAnimes themes={data.items} />
      </S.Header>
    </S.Container>
  );
}
