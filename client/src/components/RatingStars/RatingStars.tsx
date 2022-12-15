import * as S from "@/components/RatingStars/styled";
import { RatingStar } from "@/components/svgs";
import { Star } from "@/components/ui";
import { useAppSelector } from "@/hooks/useApp";
import { useStar } from "@/hooks/useStar";
import { RatingStarsProps } from "@/types/review";
import { getRatingText, transfromStarFixed } from "@/utils/review";

export function RatingStars({
  myReview,
  rating,
  onSetRating,
  onCreateReview,
  onUpdateReview,
}: RatingStarsProps) {
  const ratingStars = useAppSelector(state => state.star);
  const starStatus = useStar();

  const hanldeStarMouseMove = (
    event: React.MouseEvent<HTMLSpanElement>,
    name: string,
  ) => {
    if (myReview) {
      return;
    }

    const posX = event.nativeEvent.offsetX;
    const width = event.currentTarget.offsetWidth;
    const halfOfWidth = width / 2;

    if (name === "fifth") {
      if (posX >= 0 && posX < halfOfWidth) {
        onSetRating("4.5");
        starStatus.onFifthHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        onSetRating("5.0");
        starStatus.onFifthFull();
      } else {
        onSetRating("4.0");
        starStatus.onFifthEmpty();
      }
    } else if (name === "fourth") {
      if (posX >= 0 && posX < halfOfWidth) {
        onSetRating("3.5");
        starStatus.onFourthHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        onSetRating("4.0");
        starStatus.onFourthFull();
      } else {
        onSetRating("3.0");
        starStatus.onFourthEmpty();
      }
    } else if (name === "third") {
      if (posX >= 0 && posX < halfOfWidth) {
        onSetRating("2.5");
        starStatus.onThirdHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        onSetRating("3.0");
        starStatus.onThirdFull();
      } else {
        onSetRating("2.0");
        starStatus.onThirdEmpty();
      }
    } else if (name === "second") {
      if (posX >= 0 && posX < halfOfWidth) {
        onSetRating("1.5");
        starStatus.onSecondHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        onSetRating("2.0");
        starStatus.onSecondFull();
      } else {
        onSetRating("1.0");
        starStatus.onSecondEmpty();
      }
    } else if (name === "first") {
      if (posX >= 0 && posX < halfOfWidth) {
        onSetRating("0.5");
        starStatus.onFirstHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        onSetRating("1.0");
        starStatus.onFirstFull();
      } else {
        onSetRating("0");
        starStatus.onFirstEmpty();
      }
    }
  };

  const handleStarsMouseLeave = () => {
    if (myReview) {
      return;
    }

    onSetRating("0");
    starStatus.onAllEmpty();
  };

  const handleStarsClick = () => {
    if (!onCreateReview || !onUpdateReview) {
      return;
    }

    // 리뷰도 없고 평점도 없는 상황 // 작성
    if (!myReview) {
      starStatus.onAllEmpty();
      return onCreateReview.mutate({
        content: "",
        star: Number(rating),
      });
    }

    // 리뷰가 있고 평점이 있는 상황 // 수정
    if (myReview.star && myReview.content) {
      starStatus.onAllEmpty();
      return onUpdateReview.mutate({
        reviewId: myReview._id,
        star: 0,
      });
    }

    // 리뷰가 없고 평점만 있는 상황 // 수정
    if (myReview.star && !myReview.content) {
      starStatus.onAllEmpty();
      return onUpdateReview.mutate({
        reviewId: myReview._id,
        star: 0,
      });
    }
  };

  if (!myReview) {
    const mapedRatingStars = ratingStars.map(ratingStar => (
      <S.MyStar
        key={ratingStar.name}
        onMouseMove={event => hanldeStarMouseMove(event, ratingStar.name)}>
        <RatingStar kind={ratingStar.status} />
      </S.MyStar>
    ));

    return (
      <S.MyStarContainer>
        <S.MyStarTitle>내 별점</S.MyStarTitle>
        <S.MyStarContent>
          <S.MyStarRating {...{ rating }}>
            {transfromStarFixed(Number(rating))}
          </S.MyStarRating>
          <S.MyStarDesc {...{ rating }}>{getRatingText(rating)}</S.MyStarDesc>
          <S.MyStars
            onMouseLeave={handleStarsMouseLeave}
            onClick={handleStarsClick}>
            {mapedRatingStars}
          </S.MyStars>
        </S.MyStarContent>
      </S.MyStarContainer>
    );
  }

  return (
    <S.MyStarContainer>
      <S.MyStarTitle>내 별점</S.MyStarTitle>
      <S.MyStarContent>
        <S.MyStarRating rating={String(myReview.star)}>
          {transfromStarFixed(Number(myReview.star))}
        </S.MyStarRating>
        <S.MyStarDesc rating={String(myReview.star)}>
          {getRatingText(String(myReview.star))}
        </S.MyStarDesc>
        <S.MyStars onClick={handleStarsClick}>
          <Star rating={String(myReview.star)} size={false} />
        </S.MyStars>
      </S.MyStarContent>
    </S.MyStarContainer>
  );
}
