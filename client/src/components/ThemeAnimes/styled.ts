import styled, { css } from "styled-components";

const Tags = css`
  margin: 0.25rem;
  background: ${({ theme: { colors } }) => colors.cream};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29px;
  padding: 4px 8px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 0.875rem;
  color: ${({ theme: { colors } }) => colors.purple};
  font-weight: 500;
  line-height: 1;
  font-size: 16px;
`;

export const ThemeItem = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const ThemeList = styled.div`
  margin-top: 3.2rem;

  & ${ThemeItem} + ${ThemeItem} {
    margin-top: 2.4rem;
  }
`;

export const ThemeContainer = styled.div`
  padding: 2.4rem;
  width: 100%;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const ThemeThumbnailContainer = styled.div`
  position: relative;
  width: 236px;
  height: 330px;
`;

export const ThemeThumbnail = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 4px;
  background: ${({ theme: { colors } }) => colors.membership};
  border: none;
`;

export const DescConatiner = styled.div`
  margin-left: 1.6rem;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.filterTitle};
`;

export const AnimeTitle = styled.h3`
  margin: 0px 0px 0.8rem;
  display: block;
  font-size: 2.8rem;
  line-height: 4.8rem;
  font-weight: 700;
`;

export const Boxes = styled.div`
  margin: -0.25rem;
  display: flex;
  flex-wrap: wrap;
`;

export const StarContainer = styled.div`
  ${Tags}
  background: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
`;

export const Tag = styled.div`
  ${Tags}
`;

export const AnimeStory = styled.p`
  margin: 1.6rem 0 0;
  font-size: 1.4rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const PlayContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

export const PlayButton = styled.button`
  width: 15.2rem;
  height: 43px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 22px;
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme: { colors } }) => colors.purple};
`;

export const PlayIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.5rem;
`;
