import { UseMutationResult } from "@tanstack/react-query";

export interface Review {
  _id: string;
  author: string;
  content?: string;
  likes?: number;
  createdAt?: string;
  updatedAt?: string;
  star?: number;
}

export interface RatingStarsProps {
  rating: string;
  myReview: Review;
  onSetRating: React.Dispatch<React.SetStateAction<string>>;
  onCreateReview: UseMutationResult<
    void,
    unknown,
    {
      content: string;
      star: number;
    },
    unknown
  >;
  onDeleteRatingStar: UseMutationResult<
    void,
    unknown,
    {
      reviewId: string;
    },
    unknown
  >;
}

export interface ReviewQuery {
  reviews: Review[];
  user: Review;
  starsCount?: number;
}

export interface ReviewsProps {
  reviewAmount: number;
  data: ReviewQuery;
  onSetReviewText: React.Dispatch<React.SetStateAction<string>>;
  onRemoveReview: UseMutationResult<
    void,
    unknown,
    {
      reviewId: string;
    },
    unknown
  >;
  onSetIsTextAreaShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ReviewItemProps = {
  review?: Review;
  myReview?: Review;
  onSetReviewText?: React.Dispatch<React.SetStateAction<string>>;
  onRemoveReview?: UseMutationResult<
    void,
    unknown,
    {
      reviewId: string;
    },
    unknown
  >;
  onSetIsTextAreaShowing?: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ReviewInputProps {
  isFocus: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLTextAreaElement>;
  reviewText: string;
  handleReviewFocus: () => void;
  handleReviewBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  handleTextAreaChange: ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isTextAreaShowing: boolean;
  handleCancelClick: () => void;
  reviewData?: ReviewQuery;
  handleUpdateClick: () => void;
  handleRegisterClick: () => void;
}

export interface StarRatingProps {
  _id: string;
  rating: string;
  setRating: React.Dispatch<React.SetStateAction<string>>;
  stars: number;
  starsCount: number | undefined;
}
