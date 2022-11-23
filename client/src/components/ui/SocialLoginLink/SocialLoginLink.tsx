import * as S from "@/components/ui/SocialLoginLink/styled";

export function SocialLoginLink({
  icon,
  name,
  href = "#",
}: {
  icon: string;
  name: string;
  href?: string;
}) {
  return (
    <S.Container>
      <S.SocialIcon src={icon} alt={`${name} 아이콘`} />
      <S.SocialLink {...{ href }} target='_blank'>
        {name === "페이스북" ? `${name}으로 계속하기` : `${name}로 계속하기`}
      </S.SocialLink>
    </S.Container>
  );
}
