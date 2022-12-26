import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { getDetail } from "@/apis";
import { Episode, Review, DetailHeader } from "@/components";
import * as S from "@/pages/Detail/styled";
import { DetailQuery } from "@/types/detail";

export function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [path] = location.pathname.split(/detail|episode|review/);
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

  const handleModalBackgroundClick = () => {
    navigate(-1);
  };

  if (typeof data === "undefined") {
    return null;
  }

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
            <DetailHeader {...{ data }} />
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
