import { Anime } from "@/types/main";

export interface DailyQuery {
  [index: string]: Anime[];
}

export interface DayArgs {
  animes: Anime[];
  day: string;
  today: boolean;
}
