import membershipBackground from "@/../public/assets/imgs/membership-background.webp";
import { MembershipInformation, Products } from "@/components";
import { useFooterToggle } from "@/hooks/useFooterToggle";
import * as S from "@/pages/Membership/styled";

export function Membership() {
  useFooterToggle();

  return (
    <section>
      <S.Hero>
        <S.Background src={membershipBackground} alt='역대 인기 애니' />
        <S.Information>
          <S.Title>라프텔 멤버십으로 스마트한 덕질!</S.Title>
          <S.Desc>
            동시방영 신작부터 역대 인기 애니까지
            <br />
            멤버십으로 최애 애니 광고없이 편안하게 즐기세요
          </S.Desc>
        </S.Information>
      </S.Hero>
      <S.Content>
        <Products />
        <MembershipInformation />
      </S.Content>
    </section>
  );
}
