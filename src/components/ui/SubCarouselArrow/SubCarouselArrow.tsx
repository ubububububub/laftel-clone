import nextarrow from "@/../public/assets/svgs/nextarrow.svg";
import prevarrow from "@/../public/assets/svgs/prevarrow.svg";
import * as S from "@/components/ui/SubCarouselArrow/styled";
import { SubCarouselArrowProps } from "@/types/main";

export function SubCarouselArrow({
  onLeftArrowClick,
  onRightArrowClick,
  prev,
}: SubCarouselArrowProps) {
  return (
    <S.Container
      onClick={prev ? onLeftArrowClick : onRightArrowClick}
      {...{ prev }}>
      <S.ArrowImg src={prev ? prevarrow : nextarrow} alt='다음 캐러셀 버튼' />
    </S.Container>
  );
}
