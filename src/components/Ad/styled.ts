import styled from "styled-components";

export const ADLink = styled.a`
  display: block;
  margin: 4em 3.125em -5.125em;
`;

export const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  height: 7.5em;
  border-radius: 0.4rem;
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.lightPurple};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  padding: 2em 0px;
  white-space: pre-wrap;
`;

export const SubTitle = styled.h4`
  margin: 0px;
  font-size: 1em;
  font-weight: normal;
  line-height: 1.5em;
  letter-spacing: -0.000625em;
  color: ${({ theme: { colors } }) => colors.ad};
`;

export const MainTitle = styled.h3`
  display: flex;
  flex-direction: row;
  margin: 0px;
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.ad};
`;

export const AdImg = styled.img`
  width: auto;
  height: 9em;
  margin-left: 3em;
`;

export const LaftelTVApp = styled.strong`
  color: ${({ theme: { colors } }) => colors.purple};
`;
