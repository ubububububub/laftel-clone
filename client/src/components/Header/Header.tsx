import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

import * as S from "@/components/Header/styled";
import { Logo } from "@/components/svgs";

const navTexts = [
  { name: "태그검색", src: "/finder" },
  { name: "요일별 신작", src: "/daily" },
  { name: "테마추천", src: "/themes" },
  { name: "멤버십", src: "/membership" },
];

const mapedNavTexts = navTexts.map((text, index) => (
  <li key={index}>
    <Link to={text.src}>{text.name}</Link>
  </li>
));

export function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll: EventListener = () => {
    document.documentElement.scrollTop ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Header {...{ scroll }}>
      <S.Nav>
        <S.NavLeftList>
          <li>
            <Link to='/'>{scroll ? <Logo color='black' /> : <Logo />}</Link>
          </li>
          {mapedNavTexts}
        </S.NavLeftList>
        <S.NavRightList>
          <li>
            {scroll ? (
              <AiOutlineSearch size='24' color='#121212' />
            ) : (
              <AiOutlineSearch size='24' color='white' />
            )}
          </li>
          <S.Login>
            <Link to='/auth/login'>로그인/가입</Link>
          </S.Login>
        </S.NavRightList>
      </S.Nav>
    </S.Header>
  );
}
