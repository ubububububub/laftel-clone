export interface ReviewQuery {
  _id: string;
  author: string;
  content: string;
  star: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  item: string;
  __v: string;
}

export interface ReviewsProps {
  reviewAmount: number;
  data: ReviewQuery[];
}

export type ReviewItemProps = { review: ReviewQuery };
