import * as S from "@/components/AverageStars/styled";
import { AverageStar } from "@/components/svgs";
import { AverageStarsProps } from "@/types/detail";
import { transfromStarFixed } from "@/utils/review";

const MAX_STARS = 5;
const PERSENT_UNIT = 100;
const TRANSFORM_UNIT = -1;

const transformRatingWidthByRating = (rating: number) => {
  return ((MAX_STARS - rating) / MAX_STARS) * (PERSENT_UNIT * TRANSFORM_UNIT);
};

export function AverageStars({ stars, starsCount }: AverageStarsProps) {
  return (
    <S.StarAverageContainer>
      <S.StarAverageTitle>평균 별점</S.StarAverageTitle>
      <S.StarAverage>{transfromStarFixed(stars)}</S.StarAverage>
      <S.StarAverageCount>{`${starsCount ?? 0}개의 별점`}</S.StarAverageCount>
      <S.StarAverageStars>
        <AverageStar />
        <S.AverageBar rating={transformRatingWidthByRating(stars)} />
      </S.StarAverageStars>
    </S.StarAverageContainer>
  );
}
