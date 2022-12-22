import { ReviewItem } from "@/components";
import * as S from "@/components/Reviews/styled";
import { ReviewsProps } from "@/types/review";

export function Reviews({
  reviewAmount,
  data,
  onSetReviewText,
  onRemoveReview,
  onSetIsTextAreaShowing,
}: ReviewsProps) {
  const mapedData = data.reviews.map(review => (
    <ReviewItem key={review._id} {...{ review }} />
  ));

  return (
    <>
      <S.ReviewsHeader>
        <S.ReviewTitle>{`리뷰(${reviewAmount})`}</S.ReviewTitle>
      </S.ReviewsHeader>
      <S.ReviewList>
        {data.user.content && (
          <ReviewItem
            myReview={data.user}
            {...{ onSetReviewText }}
            {...{ onRemoveReview }}
            {...{ onSetIsTextAreaShowing }}
          />
        )}
        {mapedData}
      </S.ReviewList>
    </>
  );
}
