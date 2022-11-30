interface Anime {
  _id: string;
  image: string;
  thumbnail: string;
  title: string;
  story: string;
  genre: string[];
  tags: string[];
  releaseType: string;
  updateDay: string;
  isOnly: boolean;
  isDubbing: boolean;
  isUncut: boolean;
  isAdult: boolean;
  stars: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Poster {
  _id: string;
  item: string;
  image: string;
  logo: string;
  content: string;
  buttonText: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Daily {
  _id: string;
  item: Anime;
  dailyView: number;
  totalView: number;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

type Total = Daily;

interface Hots {
  daily: Daily;
  total: Total;
}

export interface MainQuery {
  posters: Poster[];
  themes: [];
  hots: Hots;
}
