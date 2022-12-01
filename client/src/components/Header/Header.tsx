import { NavLeftList, NavRightList } from "@/components";
import * as S from "@/components/Header/styled";
import { useAppSelector } from "@/hooks/useApp";
import { useScroll } from "@/hooks/useScroll";

export function Header() {
  useScroll();
  const { isScrollToggle } = useAppSelector(({ scroll }) => ({
    isScrollToggle: scroll.isScroll,
  }));

  return (
    <S.Header {...{ isScrollToggle }}>
      <S.Nav>
        <NavLeftList {...{ isScrollToggle }} />
        <NavRightList {...{ isScrollToggle }} />
      </S.Nav>
    </S.Header>
  );
}
