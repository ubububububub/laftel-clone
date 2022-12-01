import * as S from "@/components/AuthForm/styled";
import { Logo } from "@/components/svgs";

export function AuthForm({ children }: { children: JSX.Element }) {
  return (
    <S.Container>
      <h1>
        <Logo color='#816bff' auth />
      </h1>
      {children}
    </S.Container>
  );
}
