import { ReviewItem } from "@/components";
import * as S from "@/components/Reviews/styled";
import { ReviewsProps } from "@/types/review";

export function Reviews({ reviewAmount, data }: ReviewsProps) {
  const mapedData = data.map(review => (
    <ReviewItem key={review._id} {...{ review }} />
  ));

  return (
    <>
      <S.ReviewsHeader>
        <S.ReviewTitle>{`리뷰(${reviewAmount})`}</S.ReviewTitle>
      </S.ReviewsHeader>
      <S.ReviewList>{mapedData}</S.ReviewList>
    </>
  );
}
