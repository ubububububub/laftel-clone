import { Anime, Time } from "@/types/main";

export interface Finder {
  image: string;
  isAdult: boolean;
  isOnly: boolean;
  title: string;
  _id: string;
}

export interface AnimesProps {
  animes?: Anime[] | Time[] | Finder[];
  isPopular?: boolean;
  cellRef?: React.MutableRefObject<HTMLDivElement | null>;
  isFinder?: boolean;
}
