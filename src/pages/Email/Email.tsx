import { useRef } from "react";
import { useLocation } from "react-router-dom";

import { useEmail } from "@/hooks";
import * as S from "@/pages/Email/styled";

export function Email() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { state } = useLocation();
  const { isAuth, joinMutation, authEmailNumberMutation } = useEmail({
    ...state,
  });

  const handleJoinButtonClick = () => {
    if (!isAuth) {
      return;
    }

    joinMutation.mutate({ ...state });
  };

  const handleAuthButtonSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const input = inputRef.current as HTMLInputElement;

    authEmailNumberMutation.mutate({
      authNumber: Number(input.value),
    });
  };

  return (
    <S.Container>
      <S.Title>이메일 인증</S.Title>
      <S.Form onSubmit={handleAuthButtonSubmit}>
        <S.Email>{state.email}</S.Email>
        <S.Desc>
          위 이메일로 인증코드를 보냈습니다.
          <br />
          이메일로 받은 인증코드 6자를 입력해주세요.
        </S.Desc>
        <S.InputContainer>
          <input
            type='text'
            ref={inputRef}
            maxLength={6}
            placeholder='인증코드 6자를 입력해주세요.'
          />
          {/* <S.Time>30:00</S.Time> */}
        </S.InputContainer>
        <S.AuthConfirmButton type='submit'>인증 확인</S.AuthConfirmButton>
      </S.Form>
      <S.JoinButton
        type='button'
        disabled={!isAuth}
        {...{ isAuth }}
        onClick={handleJoinButtonClick}>
        회원 가입
      </S.JoinButton>
    </S.Container>
  );
}
