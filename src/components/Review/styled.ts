import styled, { css } from "styled-components";

const RegisterButtonHover = css`
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverPurPle};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme: { colors } }) => colors.lightBlue};
  }
`;

const ReviewFocus = css`
  background-color: ${({ theme: { colors } }) => colors.body};
`;

const ReviewInput = css`
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const Container = styled.div`
  margin-top: 2.4rem;
  font-family: inherit;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
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
  cursor: default;
`;

export const TextLength = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const CancelButton = styled.button`
  margin-left: 0.6rem;
  padding: 0 1.6rem;
  color: ${({ theme: { colors } }) => colors.inputCursor};
  background: transparent;
  font-weight: bold;
  font-size: 1.6rem;
  height: 4.2rem;
  border-radius: 4px;
  cursor: pointer;
  ${ReviewInput}
  ${RegisterButtonHover}
`;

export const SaveButton = styled.button<{ isChangedReview: boolean }>`
  margin-left: 0.6rem;
  padding: 0 1.6rem;
  color: ${({ theme: { colors } }) => colors.inputCursor};
  background: transparent;
  font-weight: bold;
  font-size: 1.6rem;
  height: 4.2rem;
  border-radius: 4px;
  cursor: pointer;
  ${({ isChangedReview }) => !isChangedReview && ReviewInput}
  ${({ isChangedReview }) => !isChangedReview && RegisterButtonHover}
`;

export const RegisterButton = styled.button<{ reviewText: string }>`
  margin-left: 0.6rem;
  padding: 0 1.6rem;
  color: ${({ theme: { colors } }) => colors.inputCursor};
  background: transparent;
  font-weight: bold;
  font-size: 1.6rem;
  height: 4.2rem;
  border-radius: 4px;
  cursor: pointer;
  ${({ reviewText }) => reviewText && ReviewInput}
  ${({ reviewText }) => reviewText && RegisterButtonHover}
`;
