import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import freeplay from "@/../public/assets/svgs/freeplay.svg";
import modalclose from "@/../public/assets/svgs/modalclose.svg";
import morearrow from "@/../public/assets/svgs/morearrow.svg";
import watch from "@/../public/assets/svgs/watch.svg";
import watched from "@/../public/assets/svgs/watched.svg";
import { Episode } from "@/components";
import { Star } from "@/components/svgs";
import { Review } from "@/pages";
import * as S from "@/pages/Detail/styled";

export function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [path] = location.pathname.split(/detail|episode|review/);

  const [isShowing, setIsShowing] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("episode");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleWatchButtonClick = () => {
    setIsShowing(current => !current);
  };

  const handleMoreButtonClick = () => {
    setIsToggle(current => !current);
  };

  const handleModalButtonClick = () => {
    navigate(-1);
  };

  const handleModalBackgroundClick = () => {
    navigate(-1);
  };

  return (
    <>
      <S.Container>
        <Outlet />
        <S.ModalBackgroundCloseButton
          type='button'
          onClick={handleModalBackgroundClick}>
          <S.ModalBackground />
        </S.ModalBackgroundCloseButton>
        <S.ModalContainer>
          <S.Modal>
            <S.HeaderContainer>
              <S.PosterContainer>
                <S.Poster
                  src='https://image.laftel.net/items/thumbs/big/0dfb2845-629f-4f19-bc42-8c19e922e702.jpg'
                  alt='애니메이션'
                />
              </S.PosterContainer>
              <S.HeaderWrapper>
                <S.Header>
                  <S.Nav>
                    <S.ModalCloseButton
                      type='button'
                      onClick={handleModalButtonClick}>
                      <S.CloseImg src={modalclose} alt='모달 닫기' />
                    </S.ModalCloseButton>
                  </S.Nav>
                  <S.AnimeInfo>
                    <S.TitleContainer>
                      <S.TagList>
                        <S.TagItem>
                          <Star color='#fff' />
                          <S.Rating>4.7</S.Rating>
                        </S.TagItem>
                      </S.TagList>
                      <S.Title>닌자 잇토키</S.Title>
                      <div>
                        <S.Character> TVA·12세·방영중</S.Character>
                      </div>
                    </S.TitleContainer>
                    <S.DescContainer>
                      <S.Menu>
                        <S.FreePlay>
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
                          <S.Story {...{ isToggle }}>
                            새로운 기술이 상용되는 근미래. SNS에서는 “홀로그램
                            고스트” 라고 불려지는 미스터리 현상에 관한 소문이
                            돌고 있다.사람의 시간을 훔치는 “입 꿰맨 남자”,밤마다
                            사람들을 납치하는 “미라”…홀로그램 고스트는 바로
                            옆에서 우리들을 노리고 있다…여기부터는 아무도 모르는
                            세계의 뒷 이야기..
                          </S.Story>
                        </S.StoryContainer>
                      </S.Desc>
                      <S.More onClick={handleMoreButtonClick}>
                        <S.MoreText>{isToggle ? "접기" : "더 보기"}</S.MoreText>
                        <S.MoreImg
                          src={morearrow}
                          alt='더 보기'
                          {...{ isToggle }}
                        />
                      </S.More>
                    </S.DescContainer>
                  </S.AnimeInfo>
                </S.Header>
              </S.HeaderWrapper>
            </S.HeaderContainer>

            <S.ContentContainer>
              <S.ContentTableContainer>
                <S.ContentTableList>
                  <S.ContentTableLink
                    to={`${path}episode`}
                    $isActive={isActive === "episode"}
                    onClick={() => setIsActive("episode")}
                    replace>
                    에피소드
                  </S.ContentTableLink>
                  <S.ContentTableLink
                    to={`${path}review`}
                    $isActive={isActive === "review"}
                    onClick={() => setIsActive("review")}
                    replace>
                    사용자 평
                  </S.ContentTableLink>
                </S.ContentTableList>
                <S.ContentTableBar $isActive={isActive} />
              </S.ContentTableContainer>
              {isActive === "episode" && <Episode />}
              {isActive === "review" && <Review />}
            </S.ContentContainer>
          </S.Modal>
        </S.ModalContainer>
      </S.Container>
    </>
  );
}
