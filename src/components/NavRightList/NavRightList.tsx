import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { DownArrow } from "../svgs";

import { SearchInput } from "@/components";
import * as S from "@/components/NavRightList/styled";
import { AuthToken } from "@/utils/authtoken";

export function NavRightList({ isScroll }: { isScroll: boolean }) {
  const [isShowing, setIsShowing] = useState(false);
  const [userId, setUserId] = useState(AuthToken.getToken("id"));
  const navigate = useNavigate();

  if (!userId) {
    return (
      <S.NavList>
        <li>
          <SearchInput {...{ isScroll }} />
        </li>
        <S.Login>
          <Link to='/auth/login'>로그인/가입</Link>
        </S.Login>
      </S.NavList>
    );
  }

  const handleUserIdClick = () => {
    setUserId("");
    AuthToken.deleteUserInfo();
    navigate("/");
  };

  const handleLoginOver = () => {
    setIsShowing(true);
  };

  const handleLoginOut = () => {
    setIsShowing(false);
  };

  return (
    <S.NavList>
      <li>
        <SearchInput {...{ isScroll }} />
      </li>
      <S.Login onMouseOver={handleLoginOver} onMouseOut={handleLoginOut}>
        <S.UserId {...{ isScroll }}>
          <S.UserIdContainer>
            <S.UserIdImg
              src='https://res.cloudinary.com/dhfkiaac8/image/upload/v1670924435/profile_nk6nq5.jpg'
              alt='프로필 이미지'
            />
            {userId}
            <DownArrow {...{ isScroll }} isHover={isShowing} />
          </S.UserIdContainer>
          {isShowing && (
            <S.UserMenu>
              <S.UserMenuInfo>
                <S.UserInfo>
                  <S.UserProfileImg
                    src='https://res.cloudinary.com/dhfkiaac8/image/upload/v1670924435/profile_nk6nq5.jpg'
                    alt='프로필 이미지'
                  />
                  <S.UserMenuId>{userId}</S.UserMenuId>
                </S.UserInfo>
              </S.UserMenuInfo>
              <S.UserMenuBar />
              <S.UserMenuList>
                <S.UserMenuItem onClick={handleUserIdClick}>
                  로그아웃
                </S.UserMenuItem>
              </S.UserMenuList>
            </S.UserMenu>
          )}
        </S.UserId>
      </S.Login>
    </S.NavList>
  );
}
