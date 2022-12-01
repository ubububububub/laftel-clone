import { useFixScroll, useFooterToggle, useNewTitle } from "@/hooks";

export function Themes() {
  useNewTitle("테마별 애니, 만화, 웹툰 추천");
  useFooterToggle();
  useFixScroll();

  return <div>Themes</div>;
}
