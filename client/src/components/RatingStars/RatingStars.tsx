import * as S from "@/components/RatingStars/styled";
import { RatingStar } from "@/components/svgs";
import { useAppSelector } from "@/hooks/useApp";
import { useStar } from "@/hooks/useStar";

export function RatingStars({
  rating,
  setRating,
  ratingText,
  setRatingText,
  ratingStar,
  setRatingStar,
}: {
  rating: string;
  setRating: React.Dispatch<React.SetStateAction<string>>;
  ratingText: string;
  setRatingText: React.Dispatch<React.SetStateAction<string>>;
  ratingStar: boolean;
  setRatingStar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ratingStars = useAppSelector(state => state.star);
  const starStatus = useStar();

  const hanldeStarMouseMove = (
    event: React.MouseEvent<HTMLSpanElement>,
    name: string,
  ) => {
    const posX = event.nativeEvent.offsetX;
    const width = event.currentTarget.offsetWidth;
    const halfOfWidth = width / 2;

    if (ratingStar) {
      return;
    }

    if (name === "fifth") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("4.5");
        setRatingText("취향 저격, 헤이! 츄라이! 츄라이!");
        starStatus.onFifthHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("5.0");
        setRatingText("더 이상 말이 필요없는 갓띵작");
        starStatus.onFifthFull();
      } else {
        setRating("4.0");
        setRatingText("이 작품을 추천해요!");
        starStatus.onFifthEmpty();
      }
    } else if (name === "fourth") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("3.5");
        setRatingText("꽤 재미있어요˙ᵕ˙");
        starStatus.onFourthHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("4.0");
        setRatingText("이 작품을 추천해요!");
        starStatus.onFourthFull();
      } else {
        setRating("3.0");
        setRatingText("볼만해요");
        starStatus.onFourthEmpty();
      }
    } else if (name === "third") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("2.5");
        setRatingText("약간 부족해요");
        starStatus.onThirdHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("3.0");
        setRatingText("볼만해요");
        starStatus.onThirdFull();
      } else {
        setRating("2.0");
        setRatingText("아쉬워요");
        starStatus.onThirdEmpty();
      }
    } else if (name === "second") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("1.5");
        setRatingText("별로예요 :(");
        starStatus.onSecondHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("2.0");
        setRatingText("아쉬워요");
        starStatus.onSecondFull();
      } else {
        setRating("1.0");
        setRatingText("아잇.. 너 참 싫다..");
        starStatus.onSecondEmpty();
      }
    } else if (name === "first") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("0.5");
        setRatingText("그동안 즐거웠고 다시는 만나지 말자");
        starStatus.onFirstHalf();
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("1.0");
        setRatingText("아잇.. 너 참 싫다..");
        starStatus.onFirstFull();
      } else {
        setRating("0");
        setRatingText("별점을 남겨주세요");
        starStatus.onFirstEmpty();
      }
    }
  };

  const handleStarSMouseLeave = () => {
    if (ratingStar) {
      return;
    }

    setRating("0");
    setRatingText("별점을 남겨주세요");
    starStatus.onEveryEmpty();
  };

  const mapedRatingStars = ratingStars.map(ratingStar => (
    <S.MyStar
      key={ratingStar.name}
      onMouseMove={event => hanldeStarMouseMove(event, ratingStar.name)}
      onClick={() => setRatingStar(current => !current)}>
      <RatingStar kind={ratingStar.status} />
    </S.MyStar>
  ));

  return (
    <S.MyStarContainer>
      <S.MyStarTitle>내 별점</S.MyStarTitle>
      <S.MyStarContent>
        <S.MyStarRating rating={rating}>{rating}</S.MyStarRating>
        <S.MyStarDesc ratingText={ratingText}>{ratingText}</S.MyStarDesc>
        <S.MyStars onMouseLeave={handleStarSMouseLeave}>
          {mapedRatingStars}
        </S.MyStars>
      </S.MyStarContent>
    </S.MyStarContainer>
  );
}
