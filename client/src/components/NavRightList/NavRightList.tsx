import { Link } from "react-router-dom";

import { SearchInput } from "@/components";
import * as S from "@/components/NavRightList/styled";

export function NavRightList({ isScroll }: { isScroll: boolean }) {
  return (
    <S.NavList>
      <li>
        <SearchInput {...{ isScroll }} />
      </li>
      <S.Login>
        <Link to='/auth/login'>로그인/가입</Link>
      </S.Login>
    </S.NavList>
  );
}
