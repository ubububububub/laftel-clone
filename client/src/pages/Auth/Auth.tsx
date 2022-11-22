import { Link, Outlet } from "react-router-dom";

import { Logo } from "@/components/svgs";
import * as S from "@/pages/Auth/styled";

export function Auth() {
  return (
    <S.Container>
      <S.Content>
        <h1>
          <Link to='/'>
            <Logo login />
          </Link>
        </h1>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}
