import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import checkbox from "@/../public/assets/svgs/checkbox.svg";
import uncheckbox from "@/../public/assets/svgs/uncheckbox.svg";
import { AgreementCheckItem } from "@/components";
import * as S from "@/pages/Agreement/styled";

const LAFTEL_AGREEMENT_INDEX = 0;
const INFO_AGREEMENT_INDEX = 1;

const checks = [
  {
    name: "laftel",
    link: "https://policy.laftel.net/service/2022/",
    linkText: "라프텔 이용약관",
    text: "  동의 (필수)",
    isChecked: false,
  },
  {
    name: "info",
    link: "https://policy.laftel.net/service/2022/",
    linkText: "개인정보 수집 및 이용",
    text: "에 대한 안내 (필수)",
    isChecked: false,
  },
  {
    name: "event",
    link: "",
    linkText: "",
    text: "맞춤 할인 및 이벤트 소식 메일 수신 (선택)",
    isChecked: false,
  },
];

export function Agreement() {
  const navigate = useNavigate();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checked, setChecked] = useState(checks);

  useEffect(() => {
    const filteredChecked = checked.filter(check => check.isChecked);

    filteredChecked.length === checked.length
      ? setIsAllChecked(true)
      : setIsAllChecked(false);
  }, [checked]);

  const handleMoveClick = () => {
    const [
      { isChecked: isLaftel },
      { isChecked: isInfo },
      { isChecked: isEvent },
    ] = checked;

    checkRequiredChecked() &&
      navigate("/auth/process/join", {
        state: {
          isLaftel,
          isInfo,
          isEvent,
        },
      });
  };

  const handleAllCheckChange = () => {
    setIsAllChecked(current => !current);

    setChecked(current =>
      current.map(check => ({ ...check, isChecked: !isAllChecked })),
    );
  };

  const checkRequiredChecked = () =>
    checked[LAFTEL_AGREEMENT_INDEX].isChecked &&
    checked[INFO_AGREEMENT_INDEX].isChecked;

  return (
    <S.Container>
      <S.CheckList>
        <li>
          <S.Check>
            <div>다음 약관에 모두 동의</div>
            <input
              type='checkbox'
              checked={isAllChecked}
              onChange={handleAllCheckChange}
            />
            {isAllChecked ? (
              <S.Checkbox src={checkbox} alt='체크 아이콘' />
            ) : (
              <S.Checkbox src={uncheckbox} alt='언체크 아이콘' />
            )}
          </S.Check>
        </li>
        <li>
          <S.Bar />
        </li>
        <AgreementCheckItem {...{ checked }} {...{ setChecked }} />
      </S.CheckList>
      <S.MoveLink disabled={!checkRequiredChecked()} onClick={handleMoveClick}>
        다음
      </S.MoveLink>
    </S.Container>
  );
}
