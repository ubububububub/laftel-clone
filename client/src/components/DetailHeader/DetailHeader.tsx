import { useState } from "react";
import { useNavigate } from "react-router-dom";

import freeplay from "@/../public/assets/svgs/freeplay.svg";
import modalclose from "@/../public/assets/svgs/modalclose.svg";
import morearrow from "@/../public/assets/svgs/morearrow.svg";
import watch from "@/../public/assets/svgs/watch.svg";
import watched from "@/../public/assets/svgs/watched.svg";
import * as S from "@/components/DetailHeader/styled";
import { Star } from "@/components/svgs";
import { DetailHeaderProps } from "@/types/detail";

export function DetailHeader({ data }: DetailHeaderProps) {
  const navigate = useNavigate();
  const [isShowing, setIsShowing] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleWatchButtonClick = () => {
    setIsShowing(current => !current);
  };

  const handleMoreButtonClick = () => {
    setIsToggle(current => !current);
  };

  const handleModalButtonClick = () => {
    navigate(-1);
  };

  const reducedGenre =
    data.genre.reduce((curr, prev) => {
      return curr + "·" + prev;
    }, "") + `·${data.releaseType}`;

  return (
    <S.HeaderContainer>
      <S.PosterContainer>
        <S.Poster src={data.image} alt='애니메이션' />
      </S.PosterContainer>
      <S.HeaderWrapper>
        <S.Header>
          <S.Nav>
            <S.ModalCloseButton type='button' onClick={handleModalButtonClick}>
              <S.CloseImg src={modalclose} alt='모달 닫기' />
            </S.ModalCloseButton>
          </S.Nav>
          <S.AnimeInfo>
            <S.TitleContainer>
              <S.TagList>
                <S.TagItem>
                  <Star color='#fff' />
                  <S.Rating>{data.stars.toFixed(1)}</S.Rating>
                </S.TagItem>
              </S.TagList>
              <S.Title>{data.title}</S.Title>
              <div>
                <S.Character>{reducedGenre.substring(1)}</S.Character>
              </div>
            </S.TitleContainer>
            <S.DescContainer>
              <S.Menu>
                <S.FreePlay href={data.first} target='_blank'>
                  <S.FreePlayImg src={freeplay} alt='1화 무료보기' />
                  <S.FreePlayText>1화 무료보기</S.FreePlayText>
                </S.FreePlay>
                <S.Watch>
                  <input
                    type='checkbox'
                    checked={isShowing}
                    onChange={handleWatchButtonClick}
                  />
                  <S.WatchImg
                    src={isShowing ? watched : watch}
                    alt='보고싶다'
                  />
                  <S.WatchText>보고싶다</S.WatchText>
                </S.Watch>
              </S.Menu>
              <S.Desc>
                <S.StoryContainer>
                  <S.Story {...{ isToggle }}>{data.story}</S.Story>
                </S.StoryContainer>
              </S.Desc>
              <S.More onClick={handleMoreButtonClick}>
                <S.MoreText>{isToggle ? "접기" : "더 보기"}</S.MoreText>
                <S.MoreImg src={morearrow} alt='더 보기' {...{ isToggle }} />
              </S.More>
            </S.DescContainer>
          </S.AnimeInfo>
        </S.Header>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
