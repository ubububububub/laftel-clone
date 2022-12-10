import { Outlet } from "react-router-dom";

import checkbox from "@/../public/assets/svgs/checkbox.svg";
import checkboxreverse from "@/../public/assets/svgs/checkboxreverse.svg";
import reset from "@/../public/assets/svgs/reset.svg";
import uncheckbox from "@/../public/assets/svgs/uncheckbox.svg";
import { Animes } from "@/components";
import { Spinner } from "@/components/ui";
import {
  useFilter,
  useFinderInfiniteScroll,
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Finder/styled";
import { filterStatus } from "@/store/features/filterSlice";

const getFilterImg = (status: string): string => {
  if (status === filterStatus.READY) {
    return uncheckbox;
  } else if (status === filterStatus.CORRECT) {
    return checkbox;
  }

  return checkboxreverse;
};

export function Finder() {
  useNewTitle("다양한 필터로 보고싶은 애니 찾기 | 라프텔");
  useFooterToggle();
  useFixScroll();
  useSearchBox();
  const {
    filters,
    onUpdateReady,
    onUpdateCorrect,
    onUpdateInCorrect,
    onAddGenre,
    onSubtractGenre,
    onAddNotGenre,
    onSubtractNotGenre,
    onAddTag,
    onSubtractTag,
    onAddNotTag,
    onSubtractNotTag,
  } = useFilter();
  const { data, hasNextPage, setTarget, handleResetClick, transformAnimes } =
    useFinderInfiniteScroll();

  const handleFilterClick = (id: number, status: string, type: string) => {
    if (status === filterStatus.READY) {
      if (type === "genre") {
        onAddGenre(id);
      } else if (type === "tag") {
        onAddTag(id);
      }
      return onUpdateCorrect(id, type);
    } else if (status === filterStatus.CORRECT) {
      if (type === "genre") {
        onSubtractGenre(id);
        onAddNotGenre(id);
      } else if (type === "tag") {
        onSubtractTag(id);
        onAddNotTag(id);
      }

      return onUpdateInCorrect(id, type);
    }

    if (type === "genre") {
      onSubtractNotGenre(id);
    } else if (type === "tag") {
      onSubtractNotTag(id);
    }

    return onUpdateReady(id, type);
  };

  console.log(data);

  const mapedFilter = filters.map(el => {
    const mapedTag = el.item.map((item, filterIndex) => {
      return (
        <S.FilterItem
          key={filterIndex}
          onClick={() => handleFilterClick(item.id, item.status, item.type)}>
          <S.FilterImg src={getFilterImg(item.status)} alt={item.status} />
          {item.title}
        </S.FilterItem>
      );
    });

    return (
      <S.FilterList key={el.title}>
        <S.FilterTitle>
          <h4>{el.title}</h4>
        </S.FilterTitle>
        {mapedTag}
      </S.FilterList>
    );
  });

  return (
    <S.Container>
      <Outlet />
      <S.Wrapper>
        <S.Bar>
          <S.Filter>
            <S.Title>필터</S.Title>
            <S.ResetWrapper>
              <S.Reset onClick={handleResetClick}>
                <S.ResetText>초기화</S.ResetText>
                <S.ResetIcon src={reset} alt='필터 초기화' />
              </S.Reset>
            </S.ResetWrapper>
          </S.Filter>
          {mapedFilter}
        </S.Bar>
        <S.Content>
          <S.SearchTitleContainer>
            <S.SearchTitle>
              총{" "}
              <S.SearchTitleStrong>
                {(data as any)?.pages[0].count || 0}
              </S.SearchTitleStrong>
              개의 작품이 검색되었어요!
            </S.SearchTitle>
          </S.SearchTitleContainer>
          <S.AnimesContainer>
            <Animes animes={transformAnimes(data)} isFinder />
            {hasNextPage && (
              <S.LoadingBar ref={setTarget}>
                <Spinner />
              </S.LoadingBar>
            )}
          </S.AnimesContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
