import styled, { css } from "styled-components";

const PremiumTextColor = css`
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const Container = styled.section`
  box-sizing: border-box;
  padding: 2.4rem;
  width: 58rem;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.cream};
`;

export const Badge = styled.div`
  margin-right: 0.4rem;
  padding: 0.2rem 0.7rem;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 12px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.lightBlack};
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Price = styled.p`
  margin: 1.6rem 0;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const MembershipList = styled.ul`
  margin-bottom: 2.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.gray};
`;

export const MembershipItem = styled.li<{ premium?: boolean }>`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1.2rem;
  }

  ${({ premium }) => premium && PremiumTextColor}
`;

export const Check = styled.img`
  display: block;
`;

export const PaymentButton = styled.button`
  width: 100%;
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.purple};
  background-color: ${({ theme: { colors } }) => colors.lightPurple};
  transition: all 0.08s ease-in 0s;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.hoverLightPurPle};
  }
`;
