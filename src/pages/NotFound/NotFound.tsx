import notFound from "@/../public/assets/imgs/notfound.webp";
import { useFixScroll, useFooterToggle, useNewTitle } from "@/hooks";
import * as S from "@/pages/NotFound/styled";

export function NotFound() {
  useNewTitle("라프텔 - 애니 추천 · 애니 스트리밍 서비스");
  useFooterToggle();
  useFixScroll();

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
