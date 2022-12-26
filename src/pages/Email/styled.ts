import styled from "styled-components";

import { ActiveButton } from "@/style/utils";

export const Container = styled.main`
  margin-top: 4.4rem;
  padding: 3.2rem;
  width: 38.6rem;
  font-size: 1.6rem;
  line-height: 1.5;
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
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0.8rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 2.4rem;
`;

export const Email = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { colors } }) => colors.purple};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Desc = styled.p`
  display: inline-block;
  margin-top: 0.8rem;
  color: ${({ theme: { colors } }) => colors.gray};
  font-size: 1.4rem;
  white-space: pre-line;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 2.4rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.cream};
`;

export const Input = styled.input`
  flex: 1 1 0%;
  padding: 0px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1.8rem;
  width: 100%;
`;

export const Time = styled.div`
  color: ${({ theme: { colors } }) => colors.invalid};
  font-size: 1.2rem;
  text-align: right;
  margin-left: 0.4rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  user-select: none;
`;

export const AuthConfirmButton = styled.button`
  height: 2.4rem;
  border-radius: 0.4rem;
  box-sizing: border-box;
  margin-top: 1.6rem;
  margin-left: auto;
  border: 1px solid ${({ theme: { colors } }) => colors.membership};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.email};
  font-size: 0.176rem;
  font-weight: bold;
`;

export const JoinButton = styled.button<{ isAuth: boolean }>`
  margin-top: 2.4rem;
  width: 100%;
  height: 4.8rem;
  font-weight: 600;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.08s ease-in 0s;
  cursor: default;
  color: ${({ theme: { colors } }) => colors.white};
  background: ${({ theme: { colors } }) => colors.cream};

  ${({ isAuth }) => isAuth && ActiveButton}
`;
