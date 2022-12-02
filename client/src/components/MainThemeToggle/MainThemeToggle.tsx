import { useState } from "react";

import { SubCarousel } from "@/components";
import * as S from "@/components/MainThemeToggle/styled";
import { DailyIndex, HotsIndex } from "@/types/main";

interface MainThemeToggleProps {
  title: string;
  tabTexts: string[];
  isPopular?: boolean;
  data: DailyIndex | HotsIndex;
}

export function MainThemeToggle({
  title,
  tabTexts,
  isPopular = false,
  data,
}: MainThemeToggleProps) {
  const [isShowNum, setShowNum] = useState(0);
  const handleDayClick = (index: number) => {
    setShowNum(index);
  };

  const mapedTabTexts = tabTexts.map((day, index) => {
    return (
      <S.TextItems
        key={index}
        isShow={isShowNum === index}
        {...{ isPopular }}
        onClick={() => {
          handleDayClick(index);
        }}>
        <S.Texts {...{ isPopular }}>{day}</S.Texts>
      </S.TextItems>
    );
  });

  const mapedKeys = Object.keys(data).map((el, index) => {
    if (isPopular) {
      return (
        <SubCarousel
          key={index}
          isShow={isShowNum === index}
          animes={data[el]}
          {...{ isPopular }}
        />
      );
    }

    return (
      <SubCarousel key={index} isShow={isShowNum === index} animes={data[el]} />
    );
  });

  return (
    <div>
      <S.DescContainer>
        <S.Title>{title}</S.Title>
        <S.TextLists {...{ isPopular }}>{mapedTabTexts}</S.TextLists>
      </S.DescContainer>
      {mapedKeys}
    </div>
  );
}
