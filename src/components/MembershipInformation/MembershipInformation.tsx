import * as S from "@/components/MembershipInformation/styled";

export function MembershipInformation() {
  return (
    <S.Container>
      <S.Title>멤버십 유의사항</S.Title>
      <section>
        <h4>구매안내</h4>
        <ul>
          <li>결제 금액은 부가세(VAT)가 포함된 가격입니다.</li>
          <li>
            등록하신 결제 수단으로{" "}
            <S.Strong>
              매월 정기 결제일에 멤버십 이용 금액이 자동으로 결제
            </S.Strong>
            됩니다.
          </li>
          <li>
            멤버십은 언제든 해지할 수 있으며 해지해도 결제 만료일까지 사용
            가능합니다.
          </li>
          <li>
            멤버십은 쿠폰, 분분 등의 비과금 혜택과 중복으로 이용할 수 없으며
            상기의 혜택을 이용 중에 멤버십을 구매할 경우 남은 비과금 혜택은
            사라지게 되고 복원할 수 없습니다.
          </li>
          <li>
            미성년 회원의 결제는 원칙적으로 법정대리인의 명의 또는 동의 하에
            이루어져야 하고, 법정대리인은 본인 동의 없이 체결된 자녀(미성년자)의
            계약을 취소할 수 있습니다.
          </li>
        </ul>
      </section>
      <section>
        <h4>이용안내</h4>
        <ul>
          <li>
            대한민국 이외 국가에서는 이용이 제한되며, 일부 콘텐츠는 저작권자의
            요청에 따라 서비스가 중단될 수 있습니다.
          </li>
          <li>
            저작권자의 요청에 따라 멤버십에 제외되는 작품이 있을 수 있습니다.
          </li>
          <li>
            지원하는 TV에 대한 자세한 내용은{" "}
            <S.HelpLink
              href='https://help.laftel.net/hc/ko/articles/360056043033-TV%EC%97%90%EC%84%9C-%EC%95%A0%EB%8B%88%EB%A5%BC-%EA%B0%90%EC%83%81%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4%EC%9A%94-'
              target='_blank'>
              이곳
            </S.HelpLink>
            에서 확인하실 수 있습니다.
          </li>
        </ul>
      </section>
      <section>
        <h4>환불안내</h4>
        <ul>
          <li>
            환불은 멤버십 해당 작품을 재생하지 않은 경우 결제 후 7일 이내에
            라프텔 고객센터를 통해 환불이 가능합니다.
          </li>
          <li>멤버십 사용 중에는 남은 기간에 대한 금액이 환불되지 않습니다.</li>
        </ul>
      </section>
      <section>
        <h4>기타</h4>
        <ul>
          <li>기타 문의 사항은 MY의 고객센터에서 1:1 문의 부탁드립니다.</li>
        </ul>
      </section>
    </S.Container>
  );
}
