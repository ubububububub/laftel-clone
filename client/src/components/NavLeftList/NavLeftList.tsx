import { NavLink } from "react-router-dom";

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
    <NavLink
      to={text.src}
      style={({ isActive }) => (isActive ? { color: "#816bff" } : undefined)}>
      {text.name}
    </NavLink>
  </li>
));

export function NavLeftList({ isScrollToggle }: { isScrollToggle: boolean }) {
  return (
    <S.NavList>
      <li>
        <h1>{isScrollToggle ? <Logo color='black' /> : <Logo />}</h1>
      </li>
      {mapedTexts}
    </S.NavList>
  );
}
