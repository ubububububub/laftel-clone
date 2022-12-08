import styled, { css } from "styled-components";

const PopluarInActive = css`
  color: ${({ theme: { colors } }) => colors.gray};
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 0.0625em solid ${({ theme: { colors } }) => colors.cream};
`;

const Acitve = css`
  background-color: ${({ theme: { colors } }) => colors.purple};
  color: ${({ theme: { colors } }) => colors.white};
`;

const InActive = css`
  background-color: ${({ theme: { colors } }) => colors.inputCursor};
`;

const PopularList = css`
  gap: 1em;
`;

const DayList = css`
  gap: 1.875em;
  width: 37.5em;
  height: 3.75em;
`;

const DayItem = css`
  height: 3.75em;
  width: 3.75em;
  border-radius: 50%;
`;

const DayTexts = css`
  letter-spacing: -0.0625em;
  color: ${({ theme: { colors } }) => colors.white};
`;

const PopularItem = css`
  height: 3em;
  min-width: 6.0625em;
  padding: 0px 1em;
  border-radius: 9999px;
  border: 0em;
  box-sizing: border-box;
`;

const PopularTexts = css`
  letter-spacing: -0.041666em;
`;

export const DescContainer = styled.div`
  font-size: calc(0.82602vw);
  padding: 0px 3.125em;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.75em;
  letter-spacing: -0.04285em;
  line-height: 1.46428em;
  padding-right: 0.075em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  color: rgb(18, 18, 18);
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-width: 75.625em;
  margin-bottom: 0.5em;
`;

export const TextLists = styled.ul<{ isPopular?: boolean }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1.5em;

  ${({ isPopular }) => (isPopular ? PopularList : DayList)}
`;

export const TextItems = styled.li<{ isShow: boolean; isPopular: boolean }>`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;

  ${({ isPopular }) => (isPopular ? PopularItem : DayItem)}
  ${({ isShow }) => (isShow ? Acitve : InActive)};
  ${({ isPopular, isShow }) => isPopular && !isShow && PopluarInActive}
`;

export const Texts = styled.span<{ isPopular?: boolean }>`
  font-weight: bold;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5;

  ${({ isPopular }) => (isPopular ? PopularTexts : DayTexts)}
`;
