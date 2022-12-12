import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getReview, postReview } from "@/apis";
import { ReviewQuery } from "@/types/review";

// export getReviewRatingByStar = (star:number) {
//   switch(star) {
//     case 1:
//       return {}
//   }
// }

export function useReview(itemId: string) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("0");
  const [ratingText, setRatingText] = useState("별점을 남겨주세요");
  const [ratingStar, setRatingStar] = useState(false);
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const { data } = useQuery<ReviewQuery[], AxiosError>({
    queryKey: ["review", itemId],
    queryFn: () => getReview(itemId),
  });
  // onSuccess: (data: ReviewQuery) => {
  //   setReview(data.content);
  //   setRating(data.star)
  //   setRatingStar(true);
  // },

  const createReview = useMutation({
    mutationFn: async ({ content, star }: { content: string; star: number }) =>
      postReview(itemId, content, star),
    onSuccess: () => queryClient.invalidateQueries(["review", itemId]),
    onError: () => navigate("/auth/email"),
  });

  return { data, createReview };
}
