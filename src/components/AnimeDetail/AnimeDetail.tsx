import { Link, useLocation } from "react-router-dom";

import * as S from "@/components/AnimeDetail/styled";
import { AnimeDetailProps } from "@/types/detail";

export function AnimeDetail({ children, id, title }: AnimeDetailProps) {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes("/theme")) {
    return (
      <S.ThemeLink
        to={`${location.pathname}/${title}/${id}/detail`}
        state={{ backgrond: location }}>
        {children}
      </S.ThemeLink>
    );
  } else if (path !== "/") {
    return (
      <Link
        to={`${location.pathname}/${id}/detail`}
        state={{ backgrond: location }}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={`/${id}/detail`} state={{ backgrond: location }}>
      {children}
    </Link>
  );
}
