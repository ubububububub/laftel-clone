import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthInput } from "@/components";
import * as S from "@/pages/Join/styled";
import { regexEmail, regexPassword } from "@/utils/regex";

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
    email: inputStatus.READY,
    password: inputStatus.READY,
    passwordConfirm: inputStatus.READY,
  });
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      return navigate("/auth/login", { replace: true });
    }
  }, []);

  const auths = {
    auth,
    validate,
    setAuth,
    setValidate,
  };

  const mapedInputs = inputs.map((input, index) => {
    return <AuthInput key={index} authInputArgs={input} {...{ auths }} />;
  });

  // const { isLaftel, isInfo, isEvent } = state;
  //  isLaftel && isInfo && isEvent 일 경우 useQuery API 요청

  const handleJoinSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const activeJoinLink = () => {
    return (
      validate.email === inputStatus.CORRECT &&
      validate.password === inputStatus.CORRECT &&
      validate.passwordConfirm === inputStatus.CORRECT
    );
  };

  return (
    <S.Container>
      <S.Title>회원가입</S.Title>
      <S.JoinForm onSubmit={handleJoinSubmit}>{mapedInputs}</S.JoinForm>
      <S.JoinLink disabled={!activeJoinLink()}>가입</S.JoinLink>
    </S.Container>
  );
}
