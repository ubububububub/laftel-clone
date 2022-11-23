import styled, { css } from "styled-components";

export const Container = styled.main`
  margin-top: 3.7rem;
  padding: 3.2rem;
  width: 38.6rem;
  border-radius: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const CheckList = styled.ul`
  margin-bottom: 2.4rem;
`;

export const CheckItem = styled.li`
  margin-top: 1.6rem;
`;

export const Check = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  line-height: 2rem;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.gray};

  & input[type="checkbox"] {
    position: absolute;
    right: 0;
    opacity: 0;
    width: 0;
  }
`;

export const Checkbox = styled.img`
  display: block;
`;

export const Bar = styled.div`
  margin: 1.6rem 0;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.cream};
`;

export const ActiveButton = css`
  cursor: pointer;
  background-color: ${({ theme: { colors } }) => colors.purple};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverPurPle};
  }
`;

export const MoveLink = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 4.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 4px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.cream};

  ${({ disabled }) => !disabled && ActiveButton}
`;
