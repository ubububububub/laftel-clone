import * as S from "@/components/FooterMenuList/styled";
import { Logo } from "@/components/svgs";

const texts = [
  { name: "회사소개", src: "https://laftel.oopy.io/" },
  { name: "고객센터", src: "https://help.laftel.net/hc/ko" },
  {
    name: "공지사항",
    src: "https://help.laftel.net/hc/ko/sections/360009073293/",
  },
  { name: "청소년 보호 정책", src: "https://policy.laftel.net/youth/2022/" },
  { name: "개인정보 처리방침", src: "https://policy.laftel.net/privacy/2022/" },
];

const mapedTexts = texts.map((text, index) => (
  <li key={index}>
    <S.MenuLink href={text.src} target='_blank'>
      {text.name}
    </S.MenuLink>
  </li>
));

export function FooterMenuList() {
  return (
    <S.MenuList>
      <li>
        <Logo />
      </li>
      {mapedTexts}
    </S.MenuList>
  );
}
