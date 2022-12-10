import axios from "axios";

import { PostJoin, PostLogin } from "@/types/auth";
import { DailyQuery } from "@/types/daily";
import { DetailQuery, EpisodeQuery } from "@/types/detail";
import { FinderQuery } from "@/types/finder";
import { Anime, MainQuery } from "@/types/main";
import { SearchQuery } from "@/types/search";
import { ThemeQuery } from "@/types/theme";
import { ThemesQuery } from "@/types/themes";

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

export const getThemes = async (): Promise<ThemesQuery[]> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main/themes`);
  return res.data;
};

export const getTheme = async (id: string): Promise<ThemeQuery> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main/themes/${id}`);
  return res.data;
};

export const postJoin = async ({
  email,
  password,
  isLaftel,
  isInfo,
  isEvent,
}: PostJoin) => {
  await axios.post(`${import.meta.env.VITE_BASE}/main/auth/join`, {
    email,
    password,
    isLaftel,
    isInfo,
    isEvent,
  });
};

export const postLogin = async ({ email, password }: PostLogin) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE}/main/auth/login`, {
    email,
    password,
  });
  return res.data;
};

export const getDetail = async (id: string): Promise<DetailQuery> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/main/item/${id}`);
  return res.data;
};

export const getEpisode = async (id: string): Promise<EpisodeQuery[]> => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE}/main/item/${id}/episodes`,
  );
  return res.data;
};

export const putEpisodeViews = async ({ id }: { id: string }) => {
  await axios.put(`${import.meta.env.VITE_BASE}/main/item/${id}/episodes`);
};
