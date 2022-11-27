import { useState } from "react";

import { AuthForm, AuthInput } from "@/components";
import { useNewTitle } from "@/hooks";
import * as S from "@/pages/Login/styled";
import { regexEmail } from "@/utils/regex";

const inputStatus = {
  READY: "ready",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

const inputs = [
  {
    title: "이메일",
    type: "email",
    name: "email",
    placeholder: "",
    regex: regexEmail,
    text: "이메일 형식이 올바르지 않습니다. 다시 입력해주세요.",
  },
  {
    title: "비밀번호",
    type: "password",
    name: "password",
    placeholder: "",
    regex: undefined,
    text: "",
  },
];

export function Login() {
  useNewTitle("회원가입 / 로그인 - 라프텔");

  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    email: inputStatus.READY,
  });

  const auths = {
    auth,
    setAuth,
    validate,
    setValidate,
  };

  const mapedInputs = inputs.map((input, index) => {
    return <AuthInput key={index} authInputArgs={input} {...{ auths }} />;
  });

  const handleLoginSubmit = () => {
    // auth.email, auth.password get 요청
  };

  const activeLoginLink = () =>
    validate.email === inputStatus.CORRECT && auth.password;

  return (
    <AuthForm>
      <S.Container>
        <S.Title>이메일로 로그인</S.Title>
        <S.LoginForm onSubmit={handleLoginSubmit}>{mapedInputs}</S.LoginForm>
        <S.LoginLink disabled={!activeLoginLink()}>로그인</S.LoginLink>
      </S.Container>
    </AuthForm>
  );
}
