import { Link } from "react-router-dom";

import * as S from "@/components/NavLeftList/styled";
import { Logo } from "@/components/svgs";

const texts = [
  { name: "태그검색", src: "/finder" },
  { name: "요일별 신작", src: "/daily" },
  { name: "테마추천", src: "/themes" },
  { name: "멤버십", src: "/membership" },
];

const mapedTexts = texts.map((text, index) => (
  <li key={index}>
    <Link to={text.src}>{text.name}</Link>
  </li>
));

export function NavLeftList({ scroll }: { scroll: boolean }) {
  return (
    <S.NavList>
      <li>
        <Link to='/'>
          <h1>{scroll ? <Logo color='black' /> : <Logo />}</h1>
        </Link>
      </li>
      {mapedTexts}
    </S.NavList>
  );
}
