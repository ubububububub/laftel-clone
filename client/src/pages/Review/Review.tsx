import { useRef, useState } from "react";

import { AverageStars, RatingStars, Reviews } from "@/components";
import { useReview } from "@/hooks";
import * as S from "@/pages/Review/styled";
import { ReviewProps } from "@/types/detail";

export function Review({ data }: ReviewProps) {
  const { stars, reviewAmount } = data;
  const { data: reviewData, createReview } = useReview(data._id);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("0");
  const [ratingText, setRatingText] = useState("별점을 남겨주세요");
  const [ratingStar, setRatingStar] = useState(false);

  const handleReviewFocus = () => {
    setIsFocus(true);
  };

  const handleReviewBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (isHover) {
      event.preventDefault();
      inputRef.current?.focus();
      return;
    }
    setIsFocus(false);
  };

  const handleReviewChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const handleRegisterClick = () => {
    createReview.mutate({ content: review, star: Number(rating) });
  };

  if (!reviewData) {
    return (
      <S.Container>
        <S.StarContainer>
          <RatingStars
            {...{ rating }}
            {...{ setRating }}
            {...{ ratingText }}
            {...{ setRatingText }}
            {...{ ratingStar }}
            {...{ setRatingStar }}
          />
          <AverageStars {...{ stars }} {...{ reviewAmount }} />
        </S.StarContainer>
        <S.ReviewContainer>
          <S.TextAreaContainer
            {...{ isFocus }}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <S.TextArea
              ref={inputRef}
              placeholder='이 작품에 대한 내 평가를 남겨보세요!'
              onFocus={handleReviewFocus}
              onBlur={handleReviewBlur}
              onChange={handleReviewChange}
            />
            <S.TextAreaFooter {...{ isFocus }}>
              <S.TextLength>{review.length}/300</S.TextLength>
              <S.RegistrationContainer>
                <S.RegisterButton
                  type='submit'
                  {...{ review }}
                  onClick={handleRegisterClick}>
                  등록
                </S.RegisterButton>
              </S.RegistrationContainer>
            </S.TextAreaFooter>
          </S.TextAreaContainer>
        </S.ReviewContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.StarContainer>
        <RatingStars
          {...{ rating }}
          {...{ setRating }}
          {...{ ratingText }}
          {...{ setRatingText }}
          {...{ ratingStar }}
          {...{ setRatingStar }}
        />
        <AverageStars {...{ stars }} {...{ reviewAmount }} />
      </S.StarContainer>
      <S.ReviewContainer>
        <S.TextAreaContainer
          {...{ isFocus }}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}>
          <S.TextArea
            ref={inputRef}
            placeholder='이 작품에 대한 내 평가를 남겨보세요!'
            onFocus={handleReviewFocus}
            onBlur={handleReviewBlur}
            onChange={handleReviewChange}
          />
          <S.TextAreaFooter {...{ isFocus }}>
            <S.TextLength>{review.length}/300</S.TextLength>
            <S.RegistrationContainer>
              <S.RegisterButton
                type='submit'
                {...{ review }}
                onClick={handleRegisterClick}>
                등록
              </S.RegisterButton>
            </S.RegistrationContainer>
          </S.TextAreaFooter>
        </S.TextAreaContainer>
        <Reviews {...{ reviewAmount }} data={reviewData} />
      </S.ReviewContainer>
    </S.Container>
  );
}
