import { Outlet } from "react-router-dom";

import { AuthForm } from "@/components";
import { useNewTitle } from "@/hooks";

export function Process() {
  useNewTitle("회원가입 / 로그인 - 라프텔");

  return (
    <AuthForm>
      <Outlet />
    </AuthForm>
  );
}
