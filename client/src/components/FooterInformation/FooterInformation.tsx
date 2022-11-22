import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import * as S from "@/components/FooterInformation/styled";

export function FooterInformation() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(current => !current);
  };

  return (
    <S.Container>
      <S.Entrepreneur onClick={handleClick}>
        (주)라프텔 사업자 정보{" "}
        {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </S.Entrepreneur>
      {toggle && (
        <S.Description>
          <p>상호: 주식회사 라프텔 / 대표: 박종원</p>
          <p>주소: 서울특별시 강남구 선릉로 428, 16층 102호 (대치동)</p>
          <p>
            사업자등록번호 : 535-86-02250 / 통신판매번호 : 제
            2021-서울강남-06910호
          </p>
          <p>이메일 : contact@laftel.net / 대표전화 : 1644-0331</p>
        </S.Description>
      )}
    </S.Container>
  );
}
