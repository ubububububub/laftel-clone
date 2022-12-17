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

const getRefreshTokenAuth = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE}/main/auth/refresh`,
    {
      headers: {
        "Content-Type": "application/json",
        accesstoken: AuthToken.getToken("access"),
        refreshtoken: AuthToken.getToken("refresh"),
      },
    },
  );

  AuthToken.setToken("access", res.data.accesstoken);
};

const checkAuthToken = async () => {
  try {
    await getRefreshTokenAuth();
  } catch (error: any) {
    AuthToken.deleteUserInfo();
    console.error("로그인 페이지로 이동");
    throw new Error(error);

    // if (error.response.status === 401) {
    // }
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

  const [id] = res.data.email.split("@");
  AuthToken.setToken("id", id);
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

export const getReview = async (
  itemId: string,
): Promise<ReviewQuery | undefined> => {
  const api = `${import.meta.env.VITE_BASE}/main/item/${itemId}/reviews`;

  try {
    const res = await axios.get(api, {
      headers: {
        "Contet-Type": "application/json",
        accesstoken: AuthToken.getToken("access"),
      },
    });

    return res.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      await checkAuthToken();
    }
  }
};

export const postReview = async (id: string, content: string, star: number) => {
  const api = `${import.meta.env.VITE_BASE}/main/item/${id}/reviews`;

  const res = await axios.post(
    api,
    {
      content,
      star,
    },
    {
      headers: {
        "Contet-Type": "application/json",
        accesstoken: AuthToken.getToken("access"),
      },
    },
  );

  try {
    if (res.status === 401) {
      await getRefreshTokenAuth();
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      await checkAuthToken();
    }
  }
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

  const body = { content, star };

  const res = await axios.put(api, body, {
    headers: {
      "Contet-Type": "application/json",
      accesstoken: AuthToken.getToken("access"),
    },
  });

  try {
    if (res.status === 401) {
      await getRefreshTokenAuth();
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      await checkAuthToken();
    }
  }
};

export const deleteReview = async (itemId: string, reviewId: string) => {
  const api = `${
    import.meta.env.VITE_BASE
  }/main/item/${itemId}/reviews/${reviewId}`;

  const res = await axios.delete(api, {
    headers: {
      "Contet-Type": "application/json",
      accesstoken: AuthToken.getToken("access"),
    },
  });

  try {
    if (res.status === 401) {
      await getRefreshTokenAuth();
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      await checkAuthToken();
    }
  }
};

export const postEmail = async ({ email }: { email: string }) => {
  const api = `${import.meta.env.VITE_BASE}/main/auth/email`;

  await axios.post(api, {
    email,
  });
};

export const postEmailAuthNumber = async (
  email: string,
  authNumber: number,
) => {
  const api = `${import.meta.env.VITE_BASE}/main/auth/certify`;

  await axios.post(api, {
    email,
    number: authNumber,
  });
};
