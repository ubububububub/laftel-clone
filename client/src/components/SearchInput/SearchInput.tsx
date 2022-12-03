import { useEffect, useRef, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import cancel from "@/../public/assets/svgs/cancel.svg";
import * as S from "@/components/SearchInput/styled";
import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import {
  showSearch,
  hideSearch,
  writeSearchText,
  clearSearchText,
  showClear,
  hideClear,
  getSearchSliceState,
} from "@/store/features/searchSlice";

export function SearchInput({ isScroll }: { isScroll: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isSearchShowing, searchText, isClearShowing } =
    useAppSelector(getSearchSliceState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onShowSearch = useCallback(() => dispatch(showSearch()), []);
  const onHideSearch = useCallback(() => dispatch(hideSearch()), []);
  const onWriteSearchText = useCallback(
    (value: string) => dispatch(writeSearchText(value)),
    [dispatch],
  );
  const onClearSearchText = useCallback(
    () => dispatch(clearSearchText()),
    [dispatch],
  );
  const onShowClear = useCallback(() => dispatch(showClear()), []);
  const onHideClear = useCallback(() => dispatch(hideClear()), []);

  useEffect(() => {
    if (!searchText) {
      return;
    }

    onShowClear();
  }, [searchText]);

  const handleSearchClick = () => {
    const input = inputRef.current as HTMLInputElement;

    input.focus();
    onShowSearch();
  };

  const handleSearchClearClick = () => {
    const input = inputRef.current as HTMLInputElement;

    onClearSearchText();
    onHideClear();
    input.focus();
  };

  const handleSearchTextChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    onWriteSearchText(target.value);
    onHideClear();
  };

  const handleSearchBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (isClearShowing) {
      event.preventDefault();
      return;
    }

    onHideSearch();
  };

  const handleSearchEnterDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.code !== "Enter") {
      return;
    }

    onHideSearch();
    return navigate(`/search/${searchText}`);
  };

  return (
    <S.Container onClick={handleSearchClick}>
      <S.InputContainer {...{ isSearchShowing }}>
        <AiOutlineSearch size='24' />
        <S.InputWrapper>
          <S.SearchInput
            type='text'
            placeholder='제목으로 검색'
            value={searchText}
            ref={inputRef}
            onChange={handleSearchTextChange}
            onBlur={handleSearchBlur}
            onKeyDown={handleSearchEnterDown}
          />
        </S.InputWrapper>
        {isClearShowing && (
          <S.IconWrapper
            onClick={handleSearchClearClick}
            {...{ isClearShowing }}>
            <S.ClearImg src={cancel} alt='검색텍스트 클리어' />
          </S.IconWrapper>
        )}
      </S.InputContainer>

      <S.SearchContainer>
        <AiOutlineSearch size='24' color={isScroll ? "#121212" : "white"} />
      </S.SearchContainer>
    </S.Container>
  );
}
