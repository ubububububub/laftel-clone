import { Link, useLocation } from "react-router-dom";

import * as S from "@/components/AnimeDetail/styled";

export function AnimeDetail({
  children,
  id,
  title,
}: {
  children: JSX.Element;
  id: string;
  title?: string;
}) {
  const location = useLocation();
  const path = location.pathname;

  if (path.includes("/theme")) {
    return (
      <S.ThemeLink
        to={`${location.pathname}/${title}/detail`}
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
