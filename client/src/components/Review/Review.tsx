import { useRef, useState } from "react";

import { AverageStars, RatingStars, Reviews } from "@/components";
import * as S from "@/components/Review/styled";
import { useReview } from "@/hooks";
import { ReviewProps } from "@/types/detail";

export function Review({ data: { stars, reviewAmount, _id } }: ReviewProps) {
  const [rating, setRating] = useState("0");
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {
    data: reviewData,
    isTextAreaShowing,
    setIsTextAreaShowing: onSetIsTextAreaShowing,
    createReview,
    updateReview,
    removeReview,
  } = useReview(_id);

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
    onSetIsTextAreaShowing(false);
  };

  const handleTextAreaChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(target.value);
  };

  const handleCancelClick = () => {
    setReviewText("");
    onSetIsTextAreaShowing(false);
  };

  const handleUpdateClick = () => {
    if (!reviewData) {
      return;
    }

    if (reviewText === reviewData.user.content) {
      return;
    }

    updateReview.mutate({
      reviewId: reviewData.user._id,
      content: reviewText,
    });
  };

  const handleRegisterClick = () => {
    if (!reviewText) {
      return;
    }

    createReview.mutate({ content: reviewText, star: Number(rating) });
    setReviewText("");
  };

  if (!reviewData) {
    return (
      <S.Container>
        {/* 리뷰가 아예 없을때 */}
        <S.StarContainer>
          <RatingStars
            {...{ rating }}
            onSetRating={setRating}
            onCreateReview={createReview}
            onUpdateReview={updateReview}
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
              value={reviewText}
              placeholder='이 작품에 대한 내 평가를 남겨보세요!'
              onFocus={handleReviewFocus}
              onBlur={handleReviewBlur}
              onChange={handleTextAreaChange}
            />
            <S.TextAreaFooter {...{ isFocus }}>
              <S.TextLength>{reviewText.length}/300</S.TextLength>
              <div>
                {!isTextAreaShowing && (
                  <S.RegisterButton
                    type='button'
                    {...{ reviewText }}
                    onClick={handleRegisterClick}>
                    등록
                  </S.RegisterButton>
                )}
              </div>
            </S.TextAreaFooter>
          </S.TextAreaContainer>
        </S.ReviewContainer>
      </S.Container>
    );
  }

  if (!reviewData.user.star) {
    return (
      <S.Container>
        {/* 리뷰 별점 있을때 */}
        <S.StarContainer>
          <RatingStars
            {...{ rating }}
            onSetRating={setRating}
            onCreateReview={createReview}
            onUpdateReview={updateReview}
          />
          <AverageStars {...{ stars }} {...{ reviewAmount }} />
        </S.StarContainer>
        <S.ReviewContainer>
          {!reviewData.user.content ||
            (isTextAreaShowing && (
              <S.TextAreaContainer
                {...{ isFocus }}
                onMouseOver={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <S.TextArea
                  ref={inputRef}
                  value={reviewText}
                  placeholder='이 작품에 대한 내 평가를 남겨보세요!'
                  onFocus={handleReviewFocus}
                  onBlur={handleReviewBlur}
                  onChange={handleTextAreaChange}
                />
                <S.TextAreaFooter {...{ isFocus }}>
                  <S.TextLength>{reviewText.length}/300</S.TextLength>
                  <div>
                    {isTextAreaShowing ? (
                      <>
                        <S.CancelButton
                          type='button'
                          onClick={handleCancelClick}>
                          취소
                        </S.CancelButton>
                        <S.SaveButton
                          type='button'
                          isChangedReview={
                            reviewText === reviewData.user.content
                          }
                          onClick={handleUpdateClick}>
                          저장
                        </S.SaveButton>
                      </>
                    ) : (
                      <S.RegisterButton
                        type='button'
                        {...{ reviewText }}
                        onClick={handleRegisterClick}>
                        등록
                      </S.RegisterButton>
                    )}
                  </div>
                </S.TextAreaFooter>
              </S.TextAreaContainer>
            ))}
          <Reviews
            {...{ inputRef }}
            {...{ reviewAmount }}
            data={reviewData}
            onSetReviewText={setReviewText}
            onRemoveReview={removeReview}
            {...{ onSetIsTextAreaShowing }}
          />
        </S.ReviewContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {/* 리뷰 별점 없을때 */}
      <S.StarContainer>
        <RatingStars
          myReview={reviewData.user}
          {...{ rating }}
          onSetRating={setRating}
          onCreateReview={createReview}
          onUpdateReview={updateReview}
        />
        <AverageStars {...{ stars }} {...{ reviewAmount }} />
      </S.StarContainer>
      <S.ReviewContainer>
        {!reviewData.user.content ||
          (isTextAreaShowing && (
            <S.TextAreaContainer
              {...{ isFocus }}
              onMouseOver={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}>
              <S.TextArea
                ref={inputRef}
                value={reviewText}
                placeholder='이 작품에 대한 내 평가를 남겨보세요!'
                onFocus={handleReviewFocus}
                onBlur={handleReviewBlur}
                onChange={handleTextAreaChange}
              />
              <S.TextAreaFooter {...{ isFocus }}>
                <S.TextLength>{reviewText.length}/300</S.TextLength>
                <div>
                  {isTextAreaShowing ? (
                    <>
                      <S.CancelButton type='button' onClick={handleCancelClick}>
                        취소
                      </S.CancelButton>
                      <S.SaveButton
                        type='button'
                        isChangedReview={reviewText === reviewData.user.content}
                        onClick={handleUpdateClick}>
                        저장
                      </S.SaveButton>
                    </>
                  ) : (
                    <S.RegisterButton
                      type='button'
                      {...{ reviewText }}
                      onClick={handleRegisterClick}>
                      등록
                    </S.RegisterButton>
                  )}
                </div>
              </S.TextAreaFooter>
            </S.TextAreaContainer>
          ))}
        <Reviews
          {...{ inputRef }}
          {...{ reviewAmount }}
          data={reviewData}
          onSetReviewText={setReviewText}
          onRemoveReview={removeReview}
          {...{ onSetIsTextAreaShowing }}
        />
      </S.ReviewContainer>
    </S.Container>
  );
}
