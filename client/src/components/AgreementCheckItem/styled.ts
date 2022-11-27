import styled from "styled-components";

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

export const AgreementLink = styled.a`
  text-decoration: underline;
`;
