import nextarrow from "@/../public/assets/svgs/nextarrow.svg";
import prevarrow from "@/../public/assets/svgs/prevarrow.svg";
import * as S from "@/components/ui/Arrow/styled";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  prev?: boolean;
}

export function Arrow({ onClick, prev }: ArrowProps) {
  return (
    <S.Container onClick={onClick} {...{ prev }}>
      <S.ArrowImg src={prev ? prevarrow : nextarrow} alt='다음 캐러셀 버튼' />
    </S.Container>
  );
}
