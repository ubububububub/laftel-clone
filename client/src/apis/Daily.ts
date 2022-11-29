import axios from "axios";

import { DailyQuery } from "@/types/daily";

export const getDailyAnimes = async (): Promise<DailyQuery> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/days`);
  return res.data;
};
