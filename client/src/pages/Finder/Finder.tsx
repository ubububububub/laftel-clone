import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enterScope } from "immer/dist/internal";
import { useState, useEffect } from "react";

import checkbox from "@/../public/assets/svgs/checkbox.svg";
import checkboxreverse from "@/../public/assets/svgs/checkboxreverse.svg";
import reset from "@/../public/assets/svgs/reset.svg";
import uncheckbox from "@/../public/assets/svgs/uncheckbox.svg";
import { getFinderAnimes } from "@/apis";
import { SubCarouselCells } from "@/components";
import {
  useFilter,
  useFixScroll,
  useFooterToggle,
  useNewTitle,
  useSearchBox,
} from "@/hooks";
import * as S from "@/pages/Finder/styled";
import { filterStatus } from "@/store/features/filterSlice";
import { FinderQuery } from "@/types/finder";

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
    tansfromStrings,
    tansfromFetchHeaders,
  } = useFilter();

  // const { data } = useQuery<FinderQuery, AxiosError>({
  //   queryKey: ["Finder", ...tansfromStrings()],
  //   queryFn: async () => {
  //     const { genre, xGenre, tag, xTag } = tansfromFetchHeaders();
  //     const data = await getFinderAnimes(genre, xGenre, tag, xTag);
  //     return data;
  //   },
  //   staleTime: 60000 * 60,
  //   refetchOnWindowFocus: false,
  // });
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FinderQuery,
    AxiosError
  >({
    queryKey: ["Finder", ...tansfromStrings()],
    queryFn: async ({ pageParam = "" }) => {
      const { genre, xGenre, tag, xTag } = tansfromFetchHeaders();
      const data = await getFinderAnimes(pageParam, genre, xGenre, tag, xTag);
      return data;
    },
    staleTime: 60000 * 60,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage) {
        return false;
      }

      if (lastPage.items) {
        return lastPage.items[lastPage.items.length - 1]._id;
      }

      return lastPage[lastPage.length - 1]._id;
    },
  });
  console.log(hasNextPage);

  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (!target) {
      return;
    }

    if (target) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target);
    }

    return () => {
      observer.unobserve(target);
    };
  }, [target]);

  const onIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0 && entry.isIntersecting) {
        fetchNextPage();
      }
    });
  };

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

  const transformAnimes = (data: any) => {
    if (!data) {
      return;
    }

    const temp = data.pages[0].items;

    if (data.pages.length > 1) {
      return temp.concat(data.pages[1]);
    }

    return temp;
  };

  const mapedFilter = filters.map((el, index) => {
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
      <S.FilterList key={index}>
        <S.FilterTitle>
          <h4>{el.title}</h4>
        </S.FilterTitle>
        {mapedTag}
      </S.FilterList>
    );
  });

  return (
    <S.Container>
      <S.Wrapper>
        <S.Bar>
          <S.Filter>
            <S.Title>필터</S.Title>
            <S.ResetWrapper>
              <S.Reset>
                <S.ResetText>초기화</S.ResetText>
                <S.ResetIcon src={reset} alt='필터 초기화' />
              </S.Reset>
            </S.ResetWrapper>
          </S.Filter>
          {mapedFilter}
        </S.Bar>
        <S.AnimesContainer>
          {/* <SubCarouselCells animes={data?.pages[0].items} isFinder /> */}
          <SubCarouselCells animes={transformAnimes(data)} isFinder />
          <div ref={setTarget}>무한 스크롤</div>
        </S.AnimesContainer>
      </S.Wrapper>
    </S.Container>
  );
}
