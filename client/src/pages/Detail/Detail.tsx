import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import freeplay from "@/../public/assets/svgs/freeplay.svg";
import modalclose from "@/../public/assets/svgs/modalclose.svg";
import morearrow from "@/../public/assets/svgs/morearrow.svg";
import watch from "@/../public/assets/svgs/watch.svg";
import watched from "@/../public/assets/svgs/watched.svg";
import { getDetail } from "@/apis";
import { Episode } from "@/components";
import { Star } from "@/components/svgs";
import { Review } from "@/pages";
import * as S from "@/pages/Detail/styled";
import { DetailQuery } from "@/types/detail";

export function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [path] = location.pathname.split(/detail|episode|review/);
  const [isShowing, setIsShowing] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("episode");
  const { id } = useParams();
  const barRef = useRef<HTMLAnchorElement>(null);

  const { data } = useQuery<DetailQuery, AxiosError>({
    queryKey: ["detail", id as string],
    queryFn: () => getDetail(id as string),
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
  });

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

  if (typeof data === "undefined") {
    return null;
  }

  const reducedGenre =
    data.genre.reduce((curr, prev) => {
      return curr + "·" + prev;
    }, "") + `·${data.releaseType}`;

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
                <S.Poster src={data.image} alt='애니메이션' />
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
                    ref={barRef}
                    to={`${path}review`}
                    $isActive={isActive === "review"}
                    onClick={() => setIsActive("review")}
                    replace>
                    사용자 평 {data.reviewAmount}
                  </S.ContentTableLink>
                </S.ContentTableList>
                <S.ContentTableBar
                  $isActive={isActive}
                  width={barRef.current?.offsetWidth}
                />
              </S.ContentTableContainer>
              {isActive === "episode" && <Episode {...{ data }} />}
              {isActive === "review" && <Review {...{ data }} />}
            </S.ContentContainer>
          </S.Modal>
        </S.ModalContainer>
      </S.Container>
    </>
  );
}
