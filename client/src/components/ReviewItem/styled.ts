import styled, { css } from "styled-components";

const ReviewDateContainerMargin = css`
  margin-top: 0;
`;

export const ReviewItem = styled.li`
  list-style: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 2rem 0px;
`;

export const ReviewHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewRatings = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const ReviewRating = styled.span`
  margin-left: 0.8rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const ReviewDateContainer = styled.div<{ isStar: boolean }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 0.8rem;

  ${({ isStar }) => !isStar && ReviewDateContainerMargin};
`;

export const MyReview = styled.label`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 2rem;
  padding: 0px 0.4rem;
  background-color: ${({ theme: { colors } }) => colors.lightPurple};
  border-radius: 0.4rem;
  margin-right: 0.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const ReviewDate = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const ReviewWriter = styled.h6`
  margin: 0px 0.8rem 0px 0px;
  font-size: 1.4rem;
  font-weight: normal;
`;

export const ReviewText = styled.article`
  margin: 1.2rem 0px;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.black};
  white-space: pre-line;
  word-break: break-all;
`;

export const ReviewFooter = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

export const LikeButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  color: rgb(80, 80, 80);
`;

export const LikeImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const LikeCount = styled.span`
  font-size: 1.4rem;
  margin-left: 0.4rem;
`;

export const SettingButton = styled.button`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`;

export const SettingButtonImg = styled.img`
  margin-left: auto;
  width: 1.6rem;
  height: 1.6rem;
`;

export const SettingWindow = styled.div`
  position: absolute;
  top: 2.4rem;
  left: -18rem;
  min-width: 20rem;
  max-width: calc(100% - 9.6rem);
  z-index: 99;
  padding-bottom: 1.6rem;
`;

export const SettingList = styled.ul`
  margin: 0px;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: rgb(0 0 0 / 16%) 0px 0.2rem 0.8rem;
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
  border-radius: 0.4rem;
  padding: 0.8rem 0px;
  max-height: 23rem;
  width: 100%;
  height: 100%;
`;

export const SettingItem = styled.li`
  list-style: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding: 1.2rem 1.6rem;
  max-width: 100%;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.body};
  }
`;

export const SettingText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.black};
`;
