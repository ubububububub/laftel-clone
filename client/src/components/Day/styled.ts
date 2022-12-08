import styled, { css } from "styled-components";

export const TodayBackground = css`
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export const TodayText = css`
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const Container = styled.div<{ today: boolean }>`
  margin-bottom: 2.4rem;
  flex: 1 1 0%;
  padding: 1.6rem 0.8rem;
  border-radius: 0.8rem;

  ${({ today }) => today && TodayBackground};
`;

export const DayTitle = styled.h3<{ today: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;

  ${({ today }) => today && TodayText}
`;

export const Thumbnail = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 106px;
  border-radius: 4px;
`;

export const AnimeTitle = styled.h4`
  display: -webkit-box;
  margin-top: 0.4rem;
  height: 4.8rem;
  font-size: 1.65rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: -0.08rem;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AnimeItem = styled.li`
  margin-top: 1.6rem;
  cursor: pointer;
`;
