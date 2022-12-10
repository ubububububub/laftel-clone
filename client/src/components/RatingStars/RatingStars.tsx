import { useState } from "react";

import * as S from "@/components/RatingStars/styled";
import { RatingStar } from "@/components/svgs";

const initialState = [
  {
    name: "first",
    status: "empty",
  },
  {
    name: "second",
    status: "empty",
  },
  {
    name: "third",
    status: "empty",
  },
  {
    name: "fourth",
    status: "empty",
  },
  {
    name: "fifth",
    status: "empty",
  },
];

export function RatingStars() {
  const [rating, setRating] = useState("0");
  const [ratingText, setRatingText] = useState("별점을 남겨주세요");
  const [ratingStars, setRatingStars] = useState(initialState);
  const [ratingStar, setRatingStar] = useState(false);

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
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "full",
          },
          {
            name: "fifth",
            status: "half",
          },
        ]);
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("5.0");
        setRatingText("더 이상 말이 필요없는 갓띵작");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "full",
          },
          {
            name: "fifth",
            status: "full",
          },
        ]);
      } else {
        setRating("4.0");
        setRatingText("이 작품을 추천해요!");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "full",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      }
    } else if (name === "fourth") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("3.5");
        setRatingText("꽤 재미있어요˙ᵕ˙");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "half",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("4.0");
        setRatingText("이 작품을 추천해요!");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "full",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else {
        setRating("3.0");
        setRatingText("볼만해요");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      }
    } else if (name === "third") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("2.5");
        setRatingText("약간 부족해요");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "half",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("3.0");
        setRatingText("볼만해요");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "full",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else {
        setRating("2.0");
        setRatingText("아쉬워요");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      }
    } else if (name === "second") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("1.5");
        setRatingText("별로예요 :(");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "half",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("2.0");
        setRatingText("아쉬워요");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "full",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else {
        setRating("1.0");
        setRatingText("아잇.. 너 참 싫다..");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "empty",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      }
    } else if (name === "first") {
      if (posX >= 0 && posX < halfOfWidth) {
        setRating("0.5");
        setRatingText("그동안 즐거웠고 다시는 만나지 말자");
        setRatingStars([
          {
            name: "first",
            status: "half",
          },
          {
            name: "second",
            status: "empty",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else if (posX > halfOfWidth && posX <= width) {
        setRating("1.0");
        setRatingText("아잇.. 너 참 싫다..");
        setRatingStars([
          {
            name: "first",
            status: "full",
          },
          {
            name: "second",
            status: "empty",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      } else {
        setRating("0");
        setRatingText("별점을 남겨주세요");
        setRatingStars([
          {
            name: "first",
            status: "empty",
          },
          {
            name: "second",
            status: "empty",
          },
          {
            name: "third",
            status: "empty",
          },
          {
            name: "fourth",
            status: "empty",
          },
          {
            name: "fifth",
            status: "empty",
          },
        ]);
      }
    }
  };

  const handleStarSMouseLeave = () => {
    if (ratingStar) {
      return;
    }

    setRating("0");
    setRatingText("별점을 남겨주세요");
    setRatingStars([
      {
        name: "first",
        status: "empty",
      },
      {
        name: "second",
        status: "empty",
      },
      {
        name: "third",
        status: "empty",
      },
      {
        name: "fourth",
        status: "empty",
      },
      {
        name: "fifth",
        status: "empty",
      },
    ]);
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
