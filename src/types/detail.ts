export interface DetailQuery {
  _id: string;
  title: string;
  genre: string[];
  releaseType: string;
  isOnly: boolean;
  isAd: boolean;
  isAdult: boolean;
  image: string;
  story: string;
  stars: number;
  reviewAmount: number;
  first: string;
}

export interface EpisodeProps {
  data: DetailQuery;
}

export type DetailHeaderProps = EpisodeProps;

export type ReviewProps = EpisodeProps;

export interface AverageStarsProps {
  stars: number;
  starsCount: number | undefined;
}

export interface AnimeDetailProps {
  children: JSX.Element;
  id: string;
  title?: string;
}

export interface EpisodeQuery {
  number: number;
  title: string;
  thumbnail: string;
  link: string;
  createdAt: string;
  _id: string;
  item: string;
  updatedAt: string;
  __v: number;
}

export interface EpisodeItemProps {
  episode: EpisodeQuery;
}
