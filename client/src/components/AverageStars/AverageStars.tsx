import * as S from "@/components/AverageStars/styled";
import { AverageStar } from "@/components/svgs";

export function AverageStars() {
  return (
    <S.StarAverageContainer>
      <S.StarAverageTitle>평균 별점</S.StarAverageTitle>
      <S.StarAverage>4.4</S.StarAverage>
      <S.StarAverageCount>553개의 별점</S.StarAverageCount>
      <S.StarAverageStars>
        <AverageStar />
        <S.AverageBar />
      </S.StarAverageStars>
    </S.StarAverageContainer>
  );
}
