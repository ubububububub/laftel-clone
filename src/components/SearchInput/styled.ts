import styled, { css } from "styled-components";

const InputShow = css`
  width: 28.8rem;
  height: 4rem;
  overflow: visible;
  margin-left: 2.4rem;
  padding-left: 1.6rem;
  padding-right: 1.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transition: color 0.4s ease 0s;
  cursor: pointer;
  position: absolute;
  right: 0px;
  color: rgb(255, 255, 255);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: rgb(255, 255, 255);
  }
`;

export const InputContainer = styled.div<{ isSearchShowing: boolean }>`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  height: 4rem;
  z-index: 1;
  transition: all 0.2s ease 0s;
  width: 0rem;
  overflow: hidden;
  margin-left: 0rem;
  padding-left: 0rem;
  padding-right: 0rem;
  border-radius: 0.4rem;
  border: 0px solid ${({ theme: { colors } }) => colors.cream};
  background-color: ${({ theme: { colors } }) => colors.white};

  ${({ isSearchShowing }) => isSearchShowing && InputShow}
`;

export const InputWrapper = styled.div`
  flex: 1 1 0%;
`;

export const SearchInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const IconWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
`;

export const ClearImg = styled.img`
  color: black;
`;
