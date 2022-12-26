import styled, { css } from "styled-components";

const LinkDefault = css`
  width: 46.8rem;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 4px;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.img`
  position: absolute;
  left: 1.4rem;
  display: block;
`;

export const SocialLink = styled.a`
  ${LinkDefault}
`;
