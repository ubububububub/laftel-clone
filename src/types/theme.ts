export interface Theme {
  _id: string;
  title: string;
  genre: string[];
  image: string;
  story: string;
  stars: number;
  first: string;
}

export interface ThemeQuery {
  title: string;
  description: string;
  items: Theme[];
}
