import styled from "styled-components";

export const ReviewsHeader = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 3.2rem;
`;

export const ReviewTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.lightGray};
`;

export const ReviewList = styled.ul`
  padding: 0px;
  margin: 1.6rem 0px 0px;
`;
