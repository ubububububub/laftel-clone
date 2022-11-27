import { useFixScroll, useFooterToggle, useNewTitle } from "@/hooks";

export function Daily() {
  useNewTitle("2022년 4분기 신작 애니 편성표");
  useFooterToggle();
  useFixScroll();

  return <div>Daily</div>;
}
