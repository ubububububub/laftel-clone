import { useState, useEffect } from "react";

import { NavLeftList, NavRightList } from "@/components";
import * as S from "@/components/Header/styled";

export function Header() {
  const [scroll, setScroll] = useState(false);

  const handleScroll: EventListener = () => {
    document.documentElement.scrollTop ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header {...{ scroll }}>
      <S.Nav>
        <NavLeftList {...{ scroll }} />
        <NavRightList {...{ scroll }} />
      </S.Nav>
    </S.Header>
  );
}
