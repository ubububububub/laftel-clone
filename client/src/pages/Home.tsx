import { useQuery } from "@tanstack/react-query";

import { getMainAnimes } from "@/apis";
import { MainCarousel, SubCarousel } from "@/components";
import { useHeaderWhite, useNewTitle } from "@/hooks";

export function Home() {
  useNewTitle("라프텔 - 애니 추천 · 애니 스트리밍 서비스");
  useHeaderWhite();
  const { data } = useQuery({
    queryKey: ["main"],
    queryFn: getMainAnimes,
    staleTime: 60000 * 60,
  });

  if (!data) {
    return;
  }

  return (
    <section style={{ fontSize: "21px" }}>
      <MainCarousel posters={data.posters} />
      <SubCarousel />
    </section>
  );
}
