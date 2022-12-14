import * as S from "@/components/svgs/DownArrow/styled";

export function DownArrow({
  isScroll,
  isHover,
}: {
  isScroll: boolean;
  isHover: boolean;
}) {
  return (
    <S.Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...{ isHover }}>
      <path
        d='M21.637 16.876a1.239 1.239 0 000-1.752l-8.76-8.761a1.239 1.239 0 00-1.753 0l-8.761 8.76a1.239 1.239 0 101.752 1.753L12 8.991l7.885 7.885a1.239 1.239 0 001.752 0z'
        fill={isScroll ? "#121212" : "#fff"}
      />
    </S.Svg>
  );
}
