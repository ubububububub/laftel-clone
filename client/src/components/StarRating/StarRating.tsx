import { AverageStars, RatingStars } from "@/components";
import * as S from "@/components/StarRating/styled";
import { useReview } from "@/hooks";
import { StarRatingProps } from "@/types/review";

export function StarRating({
  _id,
  rating,
  setRating,
  stars,
  starsCount,
}: StarRatingProps) {
  const { data: reviewData, createReview, removeRatingStar } = useReview(_id);

  if (!reviewData) {
    return null;
  }

  return (
    <S.StarContainer>
      <RatingStars
        myReview={reviewData.user}
        {...{ rating }}
        onSetRating={setRating}
        onCreateReview={createReview}
        onDeleteRatingStar={removeRatingStar}
      />
      <AverageStars {...{ stars }} {...{ starsCount }} />
    </S.StarContainer>
  );
}
