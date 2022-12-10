import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postLogin } from "@/apis";
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
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: postLogin,
    onSuccess: data => {
      localStorage.setItem("refresh", data.refreshtoken);
      return navigate("/", { replace: true });
    },
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

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ email: auth.email, password: auth.password });
  };

  const activeLoginLink = () =>
    validate.email === inputStatus.CORRECT && auth.password;

  return (
    <AuthForm>
      <S.Container>
        <S.Title>이메일로 로그인</S.Title>
        <S.LoginForm onSubmit={handleLoginSubmit}>
          {mapedInputs}{" "}
          <S.LoginLink disabled={!activeLoginLink()} type='submit'>
            로그인
          </S.LoginLink>
        </S.LoginForm>
      </S.Container>
    </AuthForm>
  );
}
