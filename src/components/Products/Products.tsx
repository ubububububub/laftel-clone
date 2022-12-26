import * as S from "@/components/Products/styled";
import { Product } from "@/components/ui";

const Basic = [
  "광고 없이 감상",
  "프로필 1인 · 동시재생 1회선",
  "최신화 시청",
  "다운로드 지원",
  "FHD 화질 지원",
  "TV 앱 지원",
];

const Premium = [
  "광고 없이 감상",
  "프로필 4인 · 동시재생 4회선",
  "최신화 시청",
  "다운로드 지원",
  "FHD 화질 지원",
  "TV 앱 지원",
];

export function Products() {
  return (
    <S.Container>
      <Product title='베이직' price={9900} memberships={Basic} />
      <Product title='프리미엄' price={14900} memberships={Premium} />
    </S.Container>
  );
}
