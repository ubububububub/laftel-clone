import google from "@/../public/assets/svgs/google.svg";
import { SocialLoginLink } from "@/components/ui";
import * as S from "@/pages/AuthSelect/styled";

export function AuthSelect() {
  return (
    <S.Container>
      <SocialLoginLink icon={google} name='구글' />
    </S.Container>
  );
}
