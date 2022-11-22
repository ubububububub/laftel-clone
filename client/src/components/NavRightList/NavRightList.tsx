import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

import * as S from "@/components/NavRightList/styled";

export function NavRightList({ scroll }: { scroll: boolean }) {
  return (
    <S.NavList>
      <li>
        {scroll ? (
          <AiOutlineSearch size='24' color='#121212' />
        ) : (
          <AiOutlineSearch size='24' color='white' />
        )}
      </li>
      <S.Login>
        <Link to='/auth/login'>로그인/가입</Link>
      </S.Login>
    </S.NavList>
  );
}
