import axios from "axios";

import { PostJoin, PostLogin } from "@/types/auth";
import { DailyQuery } from "@/types/daily";
import { DetailQuery, EpisodeQuery } from "@/types/detail";
import { FinderQuery } from "@/types/finder";
import { Anime, MainQuery } from "@/types/main";
import { ReviewQuery } from "@/types/review";
import { SearchQuery } from "@/types/search";
import { ThemeQuery } from "@/types/theme";
import { ThemesQuery } from "@/types/themes";
import { AuthToken } from "@/utils/authtoken";

const getRefreshTokenAuth = async (api: string) => {
  await axios.get(api, {
    headers: {
      "Content-Type": "application/json",
      accesstoken: AuthToken.getToken("access"),
      refreshtoken: AuthToken.getToken("refresh"),
    },
  });
};

const checkAuthToken = async (api: string, status: number) => {
  try {
    console.log(api, status);
    if (status === 401) {
      await getRefreshTokenAuth(api);
    }
  } catch (e) {
    throw new Error("Token Error");
  }
};

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
  AuthToken.setToken("refresh", res.data.refreshtoken);
  AuthToken.setToken("access", res.data.accesstoken);
  AuthToken.setToken("email", res.data.email);
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

export const getReview = async (itemId: string): Promise<ReviewQuery[]> => {
  const api = `${import.meta.env.VITE_BASE}/main/item/${itemId}/reviews`;

  const res = await axios.get(api);
  await checkAuthToken(api, res.status);

  return res.data;
};

export const postReview = async (id: string, content: string, star: number) => {
  const api = `${import.meta.env.VITE_BASE}/main/item/${id}/reviews`;

  const res = await axios.post(api, {
    headers: {
      "Contet-Type": "application/json",
      accesstoken: AuthToken.getToken("access"),
    },
    content,
    star,
  });

  await checkAuthToken(api, res.status);
};

export const putReview = async (
  itemId: string,
  reviewId: string,
  content?: string,
  star?: number,
) => {
  const api = `${
    import.meta.env.VITE_BASE
  }/main/item/${itemId}/reviews/${reviewId}`;

  let body: { content?: string; star?: number } = {};

  if (content && star) {
    body = { content, star };
  } else if (content) {
    body = { content };
  } else if (star) {
    body = { star };
  }

  const res = await axios.put(api, body, {
    headers: {
      "Content-Type": `application/json`,
    },
  });

  try {
    if (res.status === 401) {
      await getRefreshTokenAuth(api);
    }
  } catch (e) {
    throw new Error("리프레쉬 토큰이 없습니다.");
  }
};

export const deleteReview = async (itemId: string, reviewId: string) => {
  const api = `${
    import.meta.env.VITE_BASE
  }/main/item/${itemId}/reviews/${reviewId}`;

  const res = await axios.delete(api);

  try {
    if (res.status === 401) {
      await getRefreshTokenAuth(api);
    }
  } catch (e) {
    throw new Error("리프레쉬 토큰이 없습니다.");
  }
};
