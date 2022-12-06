import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

import { getFinderAnimes } from "@/apis";
import { useFilter } from "@/hooks/useFilter";
import { FinderQuery } from "@/types/finder";
import { Anime } from "@/types/main";

export function useFinderInfiniteScroll() {
  const { onResetFilters, tansfromStrings, tansfromFetchHeaders } = useFilter();
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

  const { data, fetchNextPage } = useInfiniteQuery<
    FinderQuery | Anime[],
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
        return undefined;
      }

      if ((lastPage as FinderQuery).items) {
        return (lastPage as FinderQuery).items[
          (lastPage as FinderQuery).items.length - 1
        ]._id;
      }

      if (!(lastPage as Anime[]).length) {
        return undefined;
      }

      return (lastPage as Anime[])[(lastPage as Anime[]).length - 1]._id;
    },
  });

  const handleResetClick = () => {
    onResetFilters();
  };

  const transformAnimes = (data: any) => {
    if (!data) {
      return;
    }

    const firstPage = data.pages[0].items;

    if (data.pages.length > 1) {
      const [newPage] = data.pages.slice(1);

      return [...firstPage, ...newPage];
    }
    return firstPage;
  };

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

  return { data, setTarget, handleResetClick, transformAnimes };
}
