import {
  FooterIconList,
  FooterMenuList,
  FooterInformation,
} from "@/components";
import * as S from "@/components/Footer/styled";

export function Footer() {
  return (
    <S.Footer>
      <S.Nav>
        <FooterMenuList />
        <FooterIconList />
      </S.Nav>
      <FooterInformation />
    </S.Footer>
  );
}
