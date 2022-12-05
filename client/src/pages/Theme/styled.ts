import styled from "styled-components";

export const Container = styled.section`
  margin: 6.4rem auto 3.2rem;
  width: 1200px;
  padding: 5.6rem 12px 0px;
`;

export const Header = styled.div`
  color: ${({ theme: { colors } }) => colors.filterTitle};
`;

export const ThemesTitle = styled.h2`
  margin: 0px;
  font-size: 3.2rem;
  font-weight: 800;
`;

export const ThemesDesc = styled.p`
  margin: 1.6rem 0;
  line-height: 2.4rem;
  white-space: pre-line;
  word-break: break-all;
`;

export const ThemeList = styled.ul`
  margin-top: 6.4rem;
`;

export const ThemeContainer = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.filterBorder};
  padding: 2.4rem;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  background: ${({ theme: { colors } }) => colors.white};
`;

export const ThemeImg = styled.img`
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
`;

export const AnimeStory = styled.p`
  margin-bottom: 0px;
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const PlayContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PlayLink = styled.a`
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
