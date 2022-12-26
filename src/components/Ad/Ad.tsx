import ad from "@/../public/assets/imgs/ad.png";
import * as S from "@/components/Ad/styled";

export function Ad() {
  return (
    <S.ADLink
      href='https://help.laftel.net/hc/ko/articles/360056043033'
      target='_blank'
      rel='noreferrer'>
      <S.Container>
        <S.Wrapper>
          <S.SubTitle>멤버십 이용자라면</S.SubTitle>
          <S.MainTitle>
            <S.LaftelTVApp>라프텔 TV 앱</S.LaftelTVApp>으로도 웅장하게
            즐겨보세요!
          </S.MainTitle>
        </S.Wrapper>
        <S.AdImg src={ad} alt='광고 이미지' />
      </S.Container>
    </S.ADLink>
  );
}
