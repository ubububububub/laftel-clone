import axios from "axios";

import { DailyQuery } from "@/types/daily";
import { MainQuery } from "@/types/main";
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
