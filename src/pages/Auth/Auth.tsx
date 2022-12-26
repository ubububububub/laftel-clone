import { Outlet } from "react-router-dom";

import { Logo } from "@/components/svgs";
import { useNewTitle } from "@/hooks";
import * as S from "@/pages/Auth/styled";

export function Auth() {
  useNewTitle("회원가입 / 로그인 - 라프텔");

  return (
    <S.Container>
      <h1>
        <Logo login />
      </h1>
      <S.Content>
        <Outlet />
      </S.Content>
    </S.Container>
  );
}
