import { AverageStars, RatingStars, Reviews } from "@/components";
import * as S from "@/pages/Review/styled";

export function Review() {
  return (
    <S.Container>
      <S.StarContainer>
        <RatingStars />
        <AverageStars />
      </S.StarContainer>
      <Reviews />
    </S.Container>
  );
}
