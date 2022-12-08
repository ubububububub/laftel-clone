export interface Theme {
  _id: string;
  title: string;
  genre: string[];
  image: string;
  story: string;
  stars: number;
}

export interface ThemeQuery {
  title: string;
  items: Theme[];
}
