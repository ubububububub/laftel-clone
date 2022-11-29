import { Days } from "@/components";
import { useFixScroll, useFooterToggle, useNewTitle } from "@/hooks";
import * as S from "@/pages/Daily/styled";

export function Daily() {
  useNewTitle("2022년 4분기 신작 애니 편성표");
  useFooterToggle();
  useFixScroll();

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>요일별 신작</S.Title>
        <S.Schedule>
          <Days />
        </S.Schedule>
      </S.Container>
    </S.Wrapper>
  );
}
