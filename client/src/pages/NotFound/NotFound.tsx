import { useEffect } from "react";

import notFound from "@/../public/assets/imgs/not-found.webp";
import { useFooterToggle } from "@/hooks/useFooterToggle";
import * as S from "@/pages/NotFound/styled";

export function NotFound() {
  const { setIsToggle } = useFooterToggle();

  useEffect(() => {
    setIsToggle(false);

    return () => {
      setIsToggle(true);
    };
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Character
          src={notFound}
          alt='이 페이지는 내가 가져가겠음 - 괴도루팡'
        />
      </S.Content>
      <S.Warning>
        <S.Title>
          이런, 이미 <S.Strong>사라진 페이지</S.Strong>군요.
        </S.Title>
        <S.Description>
          삭제된 페이지거나 잘못된 주소입니다. 라프텔 홈으로 이동해주세요.
          <br /> 아니면,{" "}
          <S.FinderLink to='/finder'>함께 범인을 찾아보시겠어요?</S.FinderLink>
        </S.Description>
        <S.HomeLink to='/'>홈으로 이동</S.HomeLink>
      </S.Warning>
    </S.Container>
  );
}
