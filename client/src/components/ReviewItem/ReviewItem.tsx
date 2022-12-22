import { useState } from "react";

import like from "@/../public/assets/svgs/like.svg";
import reviewbutton from "@/../public/assets/svgs/reviewbutton.svg";
import * as S from "@/components/ReviewItem/styled";
import { Star } from "@/components/ui";
import { ReviewItemProps } from "@/types/review";
import { transformDate } from "@/utils";

export function ReviewItem({
  review,
  myReview,
  onSetReviewText,
  onRemoveReview,
  onSetIsTextAreaShowing,
}: ReviewItemProps) {
  const [isSettingToggle, setIsSettingToggle] = useState(false);

  const handleSettingClick = () => {
    setIsSettingToggle(current => !current);
  };

  const handleUpdateClick = () => {
    if (
      !onSetIsTextAreaShowing ||
      !onSetReviewText ||
      !myReview ||
      !myReview.content
    ) {
      return;
    }

    onSetReviewText(myReview.content);
    onSetIsTextAreaShowing(true);
  };

  const handleRemoveClick = () => {
    if (!onRemoveReview || !onSetReviewText || !myReview) {
      return;
    }

    onSetReviewText("");
    onRemoveReview.mutate({ reviewId: myReview._id });
  };

  return (
    <S.ReviewItem>
      <S.ReviewHeader>
        <S.ReviewInfo>
          <S.ReviewRatings>
            {review && review.star && (
              <>
                <Star rating={String(review.star)} />
                <S.ReviewRating>{review.star}</S.ReviewRating>
              </>
            )}
            {myReview && myReview.star && (
              <>
                <Star rating={String(myReview.star)} />
                <S.ReviewRating>{myReview.star}</S.ReviewRating>
              </>
            )}
          </S.ReviewRatings>
          {review && review.updatedAt && (
            <S.ReviewDate>{transformDate(review.updatedAt)}</S.ReviewDate>
          )}
          {myReview && myReview.updatedAt && (
            <S.ReviewDateContainer isStar={!!myReview.star}>
              <S.MyReview>내 평가</S.MyReview>
              <S.ReviewDate>{transformDate(myReview.updatedAt)}</S.ReviewDate>
            </S.ReviewDateContainer>
          )}
        </S.ReviewInfo>
        {review && <S.ReviewWriter>{review.author}</S.ReviewWriter>}
        {myReview && <S.ReviewWriter>{myReview.author}</S.ReviewWriter>}
      </S.ReviewHeader>
      {review && <S.ReviewText>{review.content}</S.ReviewText>}
      {myReview && <S.ReviewText>{myReview.content}</S.ReviewText>}
      <S.ReviewFooter>
        {/* <S.LikeButton type='button'>
          <S.LikeImg src={like} alt='좋아요' />
          <S.LikeCount>{review?.likes || "좋아요"}</S.LikeCount>
        </S.LikeButton> */}
        {myReview && (
          <S.SettingButton type='button' onClick={handleSettingClick}>
            <S.SettingButtonImg src={reviewbutton} alt='리뷰 설정' />
            {isSettingToggle && (
              <S.SettingWindow>
                <S.SettingList>
                  <S.SettingItem onClick={handleUpdateClick}>
                    <S.SettingText>수정</S.SettingText>
                  </S.SettingItem>
                  <S.SettingItem onClick={handleRemoveClick}>
                    <S.SettingText>삭제</S.SettingText>
                  </S.SettingItem>
                </S.SettingList>
              </S.SettingWindow>
            )}
          </S.SettingButton>
        )}
      </S.ReviewFooter>
    </S.ReviewItem>
  );
}
