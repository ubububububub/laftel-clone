import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import * as S from "@/components/FooterIconList/styled";

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

const mapedIcons = icons.map((icon, index) => (
  <li key={index}>
    <S.SocialLink href={icon.src} target='_blank' rel='noreferrer'>
      {icon.content}
    </S.SocialLink>
  </li>
));

export function FooterIconList() {
  return <S.FooterIconList>{mapedIcons}</S.FooterIconList>;
}
