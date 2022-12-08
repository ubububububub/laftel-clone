import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const getBarWidth = (isActive: string) => {
  switch (isActive) {
    case "episode":
      return "67px";
    case "review":
      return "71px";
    default:
      return "";
  }
};

const getBarLeftPos = (isActive: string) => {
  switch (isActive) {
    case "episode":
      return "0px";
    case "review":
      return "98px";
    default:
      return "";
  }
};

export const Toggle = css`
  display: block;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0px 0px 1rem;
  color: ${({ theme: { colors } }) => colors.membership};
  text-overflow: ellipsis;
`;

export const Active = css`
  color: ${({ theme: { colors } }) => colors.purple};
  cursor: default;
`;

export const Container = styled.section`
  position: fixed;
  inset: 0px;
  z-index: 100000;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.5;
`;

export const ModalBackgroundCloseButton = styled.button`
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.5);
  height: calc(100vh - (100vh - 100%));
  width: 100vw;
  z-index: -1;
`;

export const CloseImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const ModalContainer = styled.div`
  opacity: 1;
  transform: translate3d(0px, 0vh, 0px);
  height: calc(100vh - (100vh - 100%));
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 3.2rem);
  width: 98rem;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.4rem;
  max-height: calc(100vh - 3.2rem);
  height: auto;
  overflow: auto scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const HeaderContainer = styled.div`
  flex: 1 1 0%;
`;

export const PosterContainer = styled.div`
  position: absolute;
  inset: 0px 0px auto auto;
  width: 78rem;
  max-width: 100%;
  aspect-ratio: 780 / 440;
`;

export const Poster = styled.img`
  position: absolute;
  right: 5.6rem;
  bottom: 5.8rem;
  object-fit: cover;
  height: 26.7rem;
  width: 20rem;
  border-radius: 0.602rem;
  border: none;
  z-index: 1000000;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.lightBlack};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem 0.4rem 0 0;
`;

export const Header = styled.header`
  z-index: 1;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  position: relative;
  padding: 2.4rem;
  width: 100%;
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const AnimeInfo = styled.div`
  flex: 1 1 0%;
  min-height: 46.6rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  user-select: none;
  padding: 4.8rem 4.8rem 3.2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin-bottom: 2.4rem;
  width: 100%;
  max-width: 60rem;
  min-height: 18.3rem;
`;

export const Title = styled.h1`
  margin: 0px 0px 0.8rem;
  font-weight: bold;
  font-size: 4rem;
  color: ${({ theme: { colors } }) => colors.white};
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export const TagList = styled.ul`
  position: relative;
  display: flex;
  padding: 0px;
  margin: 0px 0px 0.8rem;
`;

export const TagItem = styled.li`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 2.7rem;
  padding: 0px 0.8rem;
  border-radius: 0.4rem;
  background-color: ${({ theme: { colors } }) => colors.footer};
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Rating = styled.span`
  margin-left: 0.2rem;
`;

export const Character = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.inputCursor};
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  margin-bottom: 4rem;
  width: 40.8rem;
  max-width: 100%;
`;

export const FreePlay = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  padding-right: 0.8rem;
  margin-right: 8.3rem;
`;

export const FreePlayImg = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const FreePlayText = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme: { colors } }) => colors.white};
  margin-left: 0.8rem;
  cursor: inherit;
`;

export const Watch = styled.label`
  position: relative;
  flex-direction: column;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  & input[type="checkbox"] {
    position: absolute;
    right: 0;
    opacity: 0;
    width: 0;
  }
`;

export const WatchImg = styled.img`
  display: block;
  position: relative;
  height: 2.4rem;
  width: 2.4rem;
  margin-bottom: 0.4rem;
`;

export const WatchText = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.inputCursor};
`;

export const WatchCheckbox = styled.input`
  position: absolute;
  right: 0;
  opacity: 0;
  width: 0;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 2rem;
  height: 100%;
  overflow: hidden;
`;

export const StoryContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  margin-right: 8rem;
`;

export const Story = styled.summary<{ isToggle: boolean }>`
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0px 0px 3.2rem;
  color: ${({ theme: { colors } }) => colors.membership};
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow-wrap: break-word;
  overflow: hidden;

  ${({ isToggle }) => isToggle && Toggle}
`;

export const More = styled.button`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: auto;
  height: 2.4rem;
`;

export const MoreText = styled.span`
  font-weight: bold;
  font-size: 1.4;
  color: ${({ theme: { colors } }) => colors.membership};
  margin-right: 0.4rem;
`;

export const MoreImg = styled.img<{ isToggle: boolean }>`
  width: 1.4rem;
  height: 1.4rem;
  color: ${({ theme: { colors } }) => colors.white};
  transform: rotate(0deg);
  transition: transform 160ms ease-in-out 0s;

  ${({ isToggle }) =>
    isToggle &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ContentContainer = styled.div`
  padding: 3.2rem 4.8rem 4.8rem;
`;

export const ContentTableContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  height: 3.6rem;
`;

export const ContentTableList = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const ContentTableLink = styled(Link)<{ $isActive: boolean }>`
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.8rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
  border-bottom: 0.4rem;
  padding-bottom: 0.6rem;
  margin-right: 3.2rem;

  ${({ $isActive }) => $isActive && Active}
`;

export const ContentTableBar = styled.div<{ $isActive: string }>`
  left: ${({ $isActive }) => $isActive && getBarLeftPos($isActive)};
  position: absolute;
  bottom: 0px;
  height: 0.4rem;
  background-color: ${({ theme: { colors } }) => colors.purple};
  transition: left 300ms ease-in-out 0s, width 300ms ease-in-out 0s;
  width: ${({ $isActive }) => $isActive && getBarWidth($isActive)};
`;
