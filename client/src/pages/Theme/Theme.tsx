import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";

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
  const { id, title } = useParams();

  if (!id || !title) {
    return null;
  }

  useNewTitle(title);
  useFooterToggle();
  useFixScroll();
  useSearchBox();

  const { data } = useQuery<ThemeQuery, AxiosError>({
    queryKey: ["Theme", id],
    queryFn: () => getTheme(id),
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
  });

  if (!data) {
    return null;
  }

  return (
    <S.Container>
      <S.Header>
        <S.ThemesTitle>{title}</S.ThemesTitle>
        <S.ThemesDesc>asdasdasd</S.ThemesDesc>
        <ThemeAnimes themes={data.items} />
      </S.Header>
    </S.Container>
  );
}
