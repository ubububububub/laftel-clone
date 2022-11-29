export interface Day {
  _id: string;
  image: string;
  thumnail: string;
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

export interface DailyQuery {
  [index: string]: Day[];
}

interface DayProps {
  _id: string;
  image: string;
  thumnail: string;
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

export interface DayArgs {
  animes: DayProps[];
  day: string;
  today: boolean;
}
