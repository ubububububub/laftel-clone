import check from "@/../public/assets/svgs/check.svg";
import * as S from "@/components/ui/Product/styled";
import { ProductProps } from "@/types/membership";

export function Product({ title, price, memberships }: ProductProps) {
  const mapedMembership = memberships.map((membership, index) => {
    if (membership === "프로필 4인 · 동시재생 4회선") {
      return (
        <S.MembershipItem key={index} premium>
          <S.Check src={check} alt='체크 아이콘' />
          {membership}
        </S.MembershipItem>
      );
    }
    return (
      <S.MembershipItem key={index}>
        <S.Check src={check} alt='체크 아이콘' />
        {membership}
      </S.MembershipItem>
    );
  });

  return (
    <S.Container>
      <S.Title>
        {title === "프리미엄" && <S.Badge>NEW</S.Badge>}
        {title}
      </S.Title>
      <S.Price>{price.toLocaleString()}원</S.Price>
      <S.MembershipList>{mapedMembership}</S.MembershipList>
      <S.PaymentButton type='button'>{title} 멤버십 시작</S.PaymentButton>
    </S.Container>
  );
}
