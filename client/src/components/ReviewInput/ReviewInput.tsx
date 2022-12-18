import * as S from "@/components/ReviewInput/styled";
import { ReviewInputProps } from "@/types/review";

export function ReviewInput({
  isFocus,
  setIsHover,
  inputRef,
  reviewText,
  handleReviewFocus,
  handleReviewBlur,
  handleTextAreaChange,
  isTextAreaShowing,
  handleCancelClick,
  reviewData,
  handleUpdateClick,
  handleRegisterClick,
}: ReviewInputProps) {
  if (!reviewData) {
    return (
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
    );
  }

  return (
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
  );
}
