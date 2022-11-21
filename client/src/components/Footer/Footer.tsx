import { useState } from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

import * as S from "@/components/Footer/styled";
import { Logo } from "@/components/svgs";

const texts = [
  { name: "회사소개", src: "https://laftel.oopy.io/" },
  { name: "고객센터", src: "https://help.laftel.net/hc/ko" },
  {
    name: "공지사항",
    src: "https://help.laftel.net/hc/ko/sections/360009073293/",
  },
  { name: "청소년 보호 정책", src: "https://policy.laftel.net/youth/2022/" },
  { name: "개인정보 처리방침", src: "https://policy.laftel.net/privacy/2022/" },
];

const icons = [
  {
    content: <AiOutlineTwitter size='24' />,
    src: "https://twitter.com/laftel_net",
  },
  {
    content: <AiFillYoutube size='24' />,
    src: "https://www.youtube.com/channel/UCI7lPoS1I3zOOePX9ph4iAA",
  },
  {
    content: <AiFillInstagram size='24' />,
    src: "https://www.instagram.com/laftel_net/",
  },
  {
    content: <FaTiktok size='24' />,
    src: "https://www.tiktok.com/@laftel_official",
  },
];

const mapedTexts = texts.map((text, index) => (
  <li key={index}>
    <S.CLink href={text.src} target='_blank' rel='noreferrer'>
      {text.name}
    </S.CLink>
  </li>
));

const mapedIcons = icons.map((icon, index) => (
  <li key={index}>
    <S.CLink href={icon.src} target='_blank' rel='noreferrer'>
      {icon.content}
    </S.CLink>
  </li>
));

export function Footer() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(current => !current);
  };

  return (
    <S.Footer>
      <S.Content>
        <S.Texts>
          <li>
            <Link to='/'>
              <Logo />
            </Link>
          </li>
          {mapedTexts}
        </S.Texts>
        <S.Icons>{mapedIcons}</S.Icons>
      </S.Content>
      <S.Description>
        <S.InfoDisplay onClick={handleClick}>
          <S.Toggle>
            (주)라프텔 사업자 정보{" "}
            {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </S.Toggle>
        </S.InfoDisplay>
        {toggle && (
          <S.InfoContent>
            <p>상호: 주식회사 라프텔 / 대표: 박종원</p>
            <p>주소: 서울특별시 강남구 선릉로 428, 16층 102호 (대치동)</p>
            <p>
              사업자등록번호 : 535-86-02250 / 통신판매번호 : 제
              2021-서울강남-06910호
            </p>
            <p>이메일 : contact@laftel.net / 대표전화 : 1644-0331</p>
          </S.InfoContent>
        )}
      </S.Description>
    </S.Footer>
  );
}
