import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: rgb(238, 238, 238);
  font-size: calc(0.82602vw);

  .slick-dots {
    margin-bottom: 2rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .slick-dots button::before {
    color: ${({ theme: { colors } }) => colors.white} !important;
    font-size: 1.2rem;
  }
  .slick-active button::before {
    color: ${({ theme: { colors } }) => colors.white} !important;
  }

  .slick-slide.slick-active {
    z-index: 999999999999999;
  }
`;

export const CarouselContainer = styled.div``;

export const AdLink = styled.a`
  display: block;
`;

export const DescContainer = styled.div`
  position: absolute;
  left: 3.125em;
  bottom: 11em;
  max-width: 38.75em;
`;

export const LogoImg = styled.img`
  margin-top: 0.75em;
  height: 16.25em;
  object-fit: cover;
`;

export const CarosuselBackground = styled.div<{ src: string }>`
  width: 100%;
  height: 51.375em;
  background-size: cover;

  ${({ src }) => `
    background-image: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0.5) 0%,
      rgba(18, 18, 18, 0) 50%
    ),
    linear-gradient(rgba(18, 18, 18, 0.5) 0%, rgba(18, 18, 18, 0) 21.11%),
    linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(18, 18, 18, 0.5) 100%),
    url(${src});`}
`;

export const Desc = styled.strong`
  margin-top: 1.6rem;
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 1.75em;
  line-height: 1.214em;
  letter-spacing: -0.075em;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0 0 0 / 40%) 0px 0px 0.25em;
`;

export const CarouselButton = styled.button`
  margin-top: 1.5em;
  padding: 0.75em 1.125em 0.75em;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 0.25em;
  font-size: 1.5em;
  background: ${({ theme: { colors } }) => colors.white};

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const ButtonText = styled.span`
  font-weight: bold;

  line-height: 1.5em;
  letter-spacing: -0.0375em;
`;
