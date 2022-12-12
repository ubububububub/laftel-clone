import { useState } from "react";

import like from "@/../public/assets/svgs/like.svg";
import reviewbutton from "@/../public/assets/svgs/reviewbutton.svg";
import * as S from "@/components/ReviewItem/styled";
import { Star } from "@/components/ui";
import { ReviewItemProps } from "@/types/review";
import { transformDate } from "@/utils";

const transfromStarFixed = (star: number) => {
  return String(star).length === 1 ? `${star}.0` : `${star}`;
};

export function ReviewItem({ review }: ReviewItemProps) {
  const [isSettingToggle, setIsSettingToggle] = useState(false);

  const handleSettingClick = () => {
    setIsSettingToggle(current => !current);
  };

  return (
    <S.ReviewItem>
      <S.ReviewHeader>
        <S.ReviewInfo>
          <S.ReviewRatings>
            <Star rating={transfromStarFixed(review.star)} />
            {review.star && <S.ReviewRating>{review.star}</S.ReviewRating>}
          </S.ReviewRatings>
          <S.ReviewDate>{transformDate(review.updatedAt)}</S.ReviewDate>
        </S.ReviewInfo>
        <S.ReviewWriter>{review.author}</S.ReviewWriter>
      </S.ReviewHeader>
      <S.ReviewText>{review.content}</S.ReviewText>
      <S.ReviewFooter>
        <S.LikeButton type='button'>
          <S.LikeImg src={like} alt='좋아요' />
          <S.LikeCount>{review.likes || "좋아요"}</S.LikeCount>
        </S.LikeButton>
        <S.SettingButton type='button' onClick={handleSettingClick}>
          <S.SettingButtonImg src={reviewbutton} alt='리뷰 설정' />
          {isSettingToggle && (
            <S.SettingWindow>
              <S.SettingList>
                <S.SettingItem>
                  <S.SettingText>수정</S.SettingText>
                </S.SettingItem>
                <S.SettingItem>
                  <S.SettingText>삭제</S.SettingText>
                </S.SettingItem>
              </S.SettingList>
            </S.SettingWindow>
          )}
        </S.SettingButton>
      </S.ReviewFooter>
    </S.ReviewItem>
  );
}
