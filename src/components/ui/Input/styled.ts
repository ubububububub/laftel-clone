import styled from "styled-components";

export const LabelContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const InputContainer = styled.div`
  margin-top: 0.8rem;
  padding-bottom: 0.8rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.cream};
`;

export const Clear = styled.img`
  width: 24px;
  display: block;
  cursor: pointer;
`;

export const InValidText = styled.strong`
  margin-top: 0.4rem;
  display: block;
  height: 2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ theme: { colors } }) => colors.invalid};
`;
