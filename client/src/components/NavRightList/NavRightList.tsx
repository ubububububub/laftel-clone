import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

import * as S from "@/components/NavRightList/styled";

export function NavRightList({ isScrollToggle }: { isScrollToggle: boolean }) {
  return (
    <S.NavList>
      <li>
        <AiOutlineSearch
          size='24'
          color={isScrollToggle ? "#121212" : "white"}
        />
      </li>
      <S.Login>
        <Link to='/auth/login'>로그인/가입</Link>
      </S.Login>
    </S.NavList>
  );
}
