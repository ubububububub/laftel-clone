import { NavLeftList, NavRightList } from "@/components";
import * as S from "@/components/Header/styled";
import { useAppSelector } from "@/hooks/useApp";
import { useScroll } from "@/hooks/useScroll";
import { getScrollSliceState } from "@/store/features/scrollSlice";

export function Header() {
  useScroll();
  const { isScroll } = useAppSelector(getScrollSliceState);

  return (
    <S.Header {...{ isScroll }}>
      <S.Nav>
        <NavLeftList {...{ isScroll }} />
        <NavRightList {...{ isScroll }} />
      </S.Nav>
    </S.Header>
  );
}
