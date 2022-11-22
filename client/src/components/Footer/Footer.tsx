import FooterInformation from "../FooterInformation/FooterInformation";

import * as S from "@/components/Footer/styled";
import { FooterIconList } from "@/components/FooterIconList";
import { FooterMenuList } from "@/components/FooterMenuList";

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
