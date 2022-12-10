import { useState } from "react";

import { ReviewItem } from "@/components";
import * as S from "@/components/Reviews/styled";

export function Reviews() {
  const [isFocus, setIsFocus] = useState(false);
  const [review, setReview] = useState("");

  const handleReviewFocus = () => {
    setIsFocus(true);
  };

  const handleReviewBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (review) {
      return event.preventDefault();
    }

    setIsFocus(false);
  };

  const handleReviewChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  return (
    <S.ReviewContainer>
      <S.TextAreaContainer {...{ isFocus }}>
        <S.TextArea
          placeholder='이 작품에 대한 내 평가를 남겨보세요!'
          onFocus={handleReviewFocus}
          onBlur={handleReviewBlur}
          onChange={handleReviewChange}
        />
        {isFocus && (
          <S.TextAreaFooter>
            <S.TextLength>{review.length}/300</S.TextLength>
            <S.RegistrationContainer>
              <S.RegisterButton type='submit' {...{ review }}>
                등록
              </S.RegisterButton>
            </S.RegistrationContainer>
          </S.TextAreaFooter>
        )}
      </S.TextAreaContainer>
      <S.ReviewsHeader>
        <S.ReviewTitle>리뷰(43)</S.ReviewTitle>
      </S.ReviewsHeader>
      <S.ReviewList>
        <ReviewItem />
      </S.ReviewList>
    </S.ReviewContainer>
  );
}
