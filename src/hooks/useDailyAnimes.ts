import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getDailyAnimes } from "@/apis";
import { DailyQuery } from "@/types/daily";

export function useDailyAnimes() {
  return useQuery<DailyQuery, AxiosError>({
    queryKey: ["daily"],
    queryFn: getDailyAnimes,
    staleTime: 60000 * 60,
  });
}
