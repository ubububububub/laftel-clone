export const getRatingText = (rating: string) => {
  switch (rating) {
    case "0.5":
      return "그동안 즐거웠고 다시는 만나지 말자";
    case "1":
      return "아잇.. 너 참 싫다..";
    case "1.5":
      return "별로예요 :(";
    case "2":
      return "아쉬워요";
    case "2.5":
      return "약간 부족해요";
    case "3":
      return "볼만해요";
    case "3.5":
      return "꽤 재미있어요˙ᵕ˙";
    case "4":
      return "이 작품을 추천해요!";
    case "4.5":
      return "취향 저격, 헤이! 츄라이! 츄라이!";
    case "5":
      return "더 이상 말이 필요없는 갓띵작";
    default:
      return "별점을 남겨주세요";
  }
};

export const transfromStarFixed = (star: number) => {
  return String(star).length === 1 && star > 0 ? `${star}.0` : `${star}`;
};
