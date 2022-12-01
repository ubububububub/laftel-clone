import styled from "styled-components";

import { ActiveButton, DisableButton } from "@/style/utils";

export const Container = styled.main`
  margin-top: 4.4rem;
  padding: 3.2rem;
  width: 38.6rem;
  font-size: 1.6rem;
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
  background-color: ${({ theme: { colors } }) => colors.white};

  input {
    outline: none;
    border: none;
    padding: 0;
    width: 100%;
    background-color: transparent;
    font-size: 1.6rem;
    line-height: 1.5rem;
    color: ${({ theme: { colors } }) => colors.black};
    caret-color: ${({ theme: { colors } }) => colors.inputCursor};
  }

  input::placeholder {
    color: ${({ theme: { colors } }) => colors.inputCursor};
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme: { colors } }) => colors.black};
`;

export const JoinForm = styled.form`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const JoinLink = styled.button<{ disabled: boolean }>`
  margin-top: 3.2rem;
  ${DisableButton}
  ${({ disabled }) => !disabled && ActiveButton}
`;
