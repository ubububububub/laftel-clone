import nextarrow from "@/../public/assets/svgs/nextarrow.svg";
import prevarrow from "@/../public/assets/svgs/prevarrow.svg";
import * as S from "@/components/ui/MainCarouselArrow/styled";
import { MainCarouselArrowProps } from "@/types/main";

export function MainCarouselArrow({ onClick, prev }: MainCarouselArrowProps) {
  return (
    <S.Container {...{ onClick }} {...{ prev }}>
      <S.ArrowImg src={prev ? prevarrow : nextarrow} alt='다음 캐러셀 버튼' />
    </S.Container>
  );
}
