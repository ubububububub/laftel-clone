import { useRef, useState } from "react";

import { ReviewInput, Reviews, StarRating } from "@/components";
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

  const handleReviewFocus = () => setIsFocus(true);

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
  }: React.ChangeEvent<HTMLTextAreaElement>) => setReviewText(target.value);

  const handleCancelClick = () => {
    setReviewText("");
    onSetIsTextAreaShowing(false);
  };

  const handleUpdateClick = () => {
    if (!reviewData) return;

    if (reviewText === reviewData.user.content || !reviewText) return;

    updateReview.mutate({
      reviewId: reviewData.user._id,
      content: reviewText,
    });
  };

  const handleRegisterClick = () => {
    if (!reviewText) return;

    createReview.mutate({ content: reviewText, star: Number(rating) });
    setReviewText("");
  };

  const starRatingProps = {
    _id,
    rating,
    setRating,
    stars,
    reviewAmount,
  };

  const reviewInputProps = {
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
  };

  if (!reviewData) {
    return (
      <S.Container>
        <StarRating {...starRatingProps} />
        <S.ReviewContainer>
          <ReviewInput {...reviewInputProps} />
        </S.ReviewContainer>
      </S.Container>
    );
  }

  const reviewsProps = {
    inputRef,
    reviewAmount,
    data: reviewData,
    onSetReviewText: setReviewText,
    onRemoveReview: removeReview,
    onSetIsTextAreaShowing,
  };

  if (!reviewData.user.star) {
    return (
      <S.Container>
        <StarRating {...starRatingProps} />
        <S.ReviewContainer>
          {!reviewData.user.content ||
            (isTextAreaShowing && <ReviewInput {...reviewInputProps} />)}
          <Reviews {...reviewsProps} />
        </S.ReviewContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <StarRating {...starRatingProps} />
      <S.ReviewContainer>
        {!reviewData.user.content ||
          (isTextAreaShowing && <ReviewInput {...reviewInputProps} />)}
        <Reviews {...reviewsProps} />
      </S.ReviewContainer>
    </S.Container>
  );
}
