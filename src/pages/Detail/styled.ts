import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const getBarWidth = (isActive: string, width?: number) => {
  switch (isActive) {
    case "episode":
      return "67px";
    case "review":
      return `${width}px`;
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

export const ContentTableBar = styled.div<{
  $isActive: string;
  width?: number;
}>`
  left: ${({ $isActive }) => $isActive && getBarLeftPos($isActive)};
  position: absolute;
  bottom: 0px;
  height: 0.4rem;
  background-color: ${({ theme: { colors } }) => colors.purple};
  transition: left 300ms ease-in-out 0s, width 300ms ease-in-out 0s;
  width: ${({ $isActive, width }) =>
    $isActive && getBarWidth($isActive, width)};
`;
