import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { JoinInput } from "@/components";
import * as S from "@/pages/Join/styled";
import { regexEmail, regexPassword } from "@/utils/regex";

const inputs = [
  {
    title: "이메일",
    type: "email",
    name: "email",
    placeholder: "example@gmail.com",
    regex: regexEmail,
    text: "이메일 형식이 올바르지 않습니다. 다시 입력해주세요.",
  },
  {
    title: "비밀번호",
    type: "password",
    name: "password",
    placeholder: "8자 이상 영문/숫자/특수문자 중 2가지 포함",
    regex: regexPassword,
    text: "총 8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력해주세요.",
  },
  {
    title: "비밀번호 확인",
    type: "password",
    name: "passwordConfirm",
    placeholder: "비밀번호를 다시 한 번 입력해주세요.",
    regex: undefined,
    text: "비밀번호가 일치하지 않습니다. 다시 입력해주세요.",
  },
];

export function Join() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [validate, setValidate] = useState({
    email: "ready",
    password: "ready",
    passwordConfirm: "ready",
  });
  const navigate = useNavigate();
  const { state } = useLocation();

  const auths = {
    auth,
    validate,
    setAuth,
    setValidate,
  };

  const mapedInputs = inputs.map((input, index) => {
    const joinInputArgs = { ...input };
    return <JoinInput key={index} {...{ joinInputArgs }} {...{ auths }} />;
  });

  // const { isLaftel, isInfo, isEvent } = state;
  //  isLaftel && isInfo && isEvent 일 경우 useQuery API 요청

  useEffect(() => {
    if (!state) {
      return navigate("/auth/login", { replace: true });
    }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <S.JoinForm onSubmit={handleSubmit}>{mapedInputs}</S.JoinForm>
      <S.JoinLink disabled={false}>가입</S.JoinLink>
    </S.Container>
  );
}
