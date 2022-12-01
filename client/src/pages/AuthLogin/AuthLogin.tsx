import letter from "@/../public/assets/svgs/letter.svg";
import * as S from "@/pages/AuthLogin/styled";

const texts = [
  { name: "이메일로 가입", src: "/auth/process/agreement" },
  { name: "다른 방법으로 계속", src: "/auth/select" },
];

const mapedTexts = texts.map((text, index) => (
  <li key={index}>
    <S.MenuLink to={text.src}>{text.name}</S.MenuLink>
  </li>
));

export function AuthLogin() {
  return (
    <S.Container>
      <S.Desc>
        신작부터 역대 인기작품까지
        <br />
        애니메이션을 한 곳에서 편-안하게 즐기세요!
      </S.Desc>
      <S.EmailLoginLink to='/auth/email'>
        <S.Letter src={letter} alt='이메일 아이콘' />
        이메일로 로그인
      </S.EmailLoginLink>
      <S.MenuList>{mapedTexts}</S.MenuList>
    </S.Container>
  );
}
