import { AverageStars, RatingStars } from "@/components";
import * as S from "@/components/StarRating/styled";
import { useReview } from "@/hooks";
import { StarRatingProps } from "@/types/review";

export function StarRating({
  _id,
  rating,
  setRating,
  stars,
  reviewAmount,
}: StarRatingProps) {
  const { data: reviewData, createReview, updateReview } = useReview(_id);

  return (
    <S.StarContainer>
      <RatingStars
        myReview={reviewData?.user}
        {...{ rating }}
        onSetRating={setRating}
        onCreateReview={createReview}
        onUpdateReview={updateReview}
      />
      <AverageStars {...{ stars }} {...{ reviewAmount }} />
    </S.StarContainer>
  );
}
