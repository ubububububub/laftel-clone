import styled, { keyframes } from "styled-components";

import authBackground from "@/../public/assets/imgs/auth-background.webp";

const Slide = keyframes`
0% {
  background-position: 0px 0px;
}

100% {
  background-position: calc(-100vw + 100%) 0px;
}
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${authBackground});
  background-size: auto 100%;
  animation: 100s linear 0s infinite normal none running ${Slide};
`;

export const Content = styled.main`
  text-align: center;
`;
