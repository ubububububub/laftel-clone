import styled, { css } from "styled-components";

const ThemeImg = css<{ image: string }>`
  position: absolute;
  width: 106px;
  height: 152px;
  box-shadow: rgb(0 0 0 / 23%) 0px 3px 12px, rgb(0 0 0 / 16%) 0px 3px 12px;
  box-sizing: content-box;

  ${({ image }) =>
    image &&
    css`
      background: url(${image}) center center / cover no-repeat
        rgb(138, 138, 138);
    `}
`;

export const ContainerLink = styled.a`
  position: relative;
  padding: 49px;
`;

export const BoardContainer = styled.div`
  width: 324px;
  box-shadow: rgb(0 0 0 / 12%) 0px 1.5px 6px;
  cursor: pointer;
`;

export const Board = styled.div`
  background: ${({ theme: { colors } }) => colors.inputCursor};
  height: 208px;
  position: relative;
  overflow: hidden;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const ThemeImgs = styled.div`
  width: 254px;
  height: 152px;
  position: relative;
`;

export const ThemeFirstImg = styled.div`
  left: 0px;
  z-index: 3;
  ${ThemeImg};
`;

export const ThemeSecondImg = styled.div`
  top: -8px;
  left: 29.133%;
  z-index: 2;
  ${ThemeImg};
`;

export const ThemeThirdImg = styled.div`
  right: 0px;
  z-index: 1;
  ${ThemeImg};
`;

export const DescContainer = styled.div`
  background: rgb(255, 255, 255);
  height: 64px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-left: 19px;
  padding-right: 19px;
  font-size: 14px;
  font-weight: 600;
`;

export const Desc = styled.div`
  width: 100%;
`;
