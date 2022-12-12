import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 2.4rem;
  font-family: inherit;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const StarContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 17.2rem;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
`;

const ReviewFocus = css`
  background-color: ${({ theme: { colors } }) => colors.body};
`;

const ReviewInput = css`
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const TextAreaContainer = styled.div<{ isFocus: boolean }>`
  opacity: 1;
  height: calc(11.2rem);
  cursor: text;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme: { colors } }) => colors.cream};

  ${({ isFocus }) => !isFocus && ReviewFocus}
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  padding: 1.6rem 1.6rem 0.9rem;
  caret-color: ${({ theme: { colors } }) => colors.purple};
  resize: none;
  background: transparent;
  font-family: inherit;
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.black};
  height: calc(11.2rem);
`;

export const TextAreaFooter = styled.footer<{ isFocus: boolean }>`
  display: ${({ isFocus }) => (isFocus ? "flex" : "none")};
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.8rem 0.8rem 0.8rem 2.4rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
  height: 6.4rem;
`;

export const TextLength = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const RegistrationContainer = styled.div``;

export const RegisterButton = styled.button<{ review: string }>`
  color: ${({ theme: { colors } }) => colors.inputCursor};
  background: transparent;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  ${({ review }) => review && ReviewInput}
`;
