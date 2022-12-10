import { useState } from "react";

import like from "@/../public/assets/svgs/like.svg";
import reviewbutton from "@/../public/assets/svgs/reviewbutton.svg";
import * as S from "@/components/ReviewItem/styled";
import { Star } from "@/components/ui";

export function ReviewItem() {
  const [isSettingToggle, setIsSettingToggle] = useState(false);

  const handleSettingClick = () => {
    setIsSettingToggle(current => !current);
  };

  return (
    <S.ReviewItem>
      <S.ReviewHeader>
        <S.ReviewInfo>
          <S.ReviewRatings>
            <Star rating='5.0' />
            <S.ReviewRating>5.0</S.ReviewRating>
          </S.ReviewRatings>
          <S.ReviewDate>1개월 전</S.ReviewDate>
        </S.ReviewInfo>
        <S.ReviewWriter>아아아아나(znf*******)</S.ReviewWriter>
      </S.ReviewHeader>
      <S.ReviewText>이걸 위해 스토리 다 스킵했지 ㅋㅋㅋ</S.ReviewText>
      <S.ReviewFooter>
        <S.LikeButton type='button'>
          <S.LikeImg src={like} alt='좋아요' />
          <S.LikeCount>144</S.LikeCount>
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
