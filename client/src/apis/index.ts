import axios from "axios";

import { DailyQuery } from "@/types/daily";
import { FinderQuery } from "@/types/finder";
import { Anime, MainQuery } from "@/types/main";
import { SearchQuery } from "@/types/search";

export const getDailyAnimes = async (): Promise<DailyQuery> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main/days`);
  return res.data;
};

export const getMainAnimes = async (): Promise<MainQuery> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main`);
  return res.data;
};

export const getSearchAnimes = async (query: string): Promise<SearchQuery> => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE}/main/search?keyword=${query}`,
  );

  return { data: res.data, status: res.status };
};

export const getFinderAnimes = async (
  pageParam: string,
  genre: string,
  xGenre: string,
  tags: string,
  xTags: string,
): Promise<FinderQuery | Anime[]> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main/finder`, {
    headers: {
      "Content-Type": "application/json",
      _id: pageParam,
      genre,
      xGenre,
      tags,
      xTags,
    },
  });

  return res.data;
};
