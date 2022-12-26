interface FinderAnime {
  _id: string;
  image: string;
  isAdult: boolean;
  isOnly: boolean;
  title: string;
}

export interface FinderQuery {
  count?: number;
  items: FinderAnime[];
}
