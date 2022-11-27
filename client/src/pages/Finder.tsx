import { useFixScroll, useFooterToggle, useNewTitle } from "@/hooks";

export function Finder() {
  useNewTitle("다양한 필터로 보고싶은 애니 찾기 | 라프텔");
  useFooterToggle();
  useFixScroll();

  return <div>Finder</div>;
}
