import { useState } from "react";
import { Link } from "react-router-dom";

import { SearchInput } from "@/components";
import * as S from "@/components/NavRightList/styled";
import { AuthToken } from "@/utils/authtoken";

export function NavRightList({ isScroll }: { isScroll: boolean }) {
  const [email] = useState(AuthToken.getToken("email"));

  if (!email) {
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

  return (
    <S.NavList>
      <li>
        <SearchInput {...{ isScroll }} />
      </li>
      <S.Login>{/* {email} */}</S.Login>
    </S.NavList>
  );
}
