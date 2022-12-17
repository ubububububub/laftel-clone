import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { deleteReview, getReview, postReview, putReview } from "@/apis";
import { ReviewQuery } from "@/types/review";
import { AuthToken } from "@/utils/authtoken";

export function useReview(id: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isTextAreaShowing, setIsTextAreaShowing] = useState(false);

  const { data } = useQuery<ReviewQuery | undefined, AxiosError>({
    queryKey: ["review", id],
    queryFn: () => getReview(id),
  });

  const createReview = useMutation({
    mutationFn: async ({ content, star }: { content: string; star: number }) =>
      postReview(id, content, star),
    onSuccess: () => {
      queryClient.invalidateQueries(["review", id]);
      queryClient.invalidateQueries(["detail", id]);
    },
    onError: () => {
      AuthToken.deleteUserInfo();
      navigate("/auth/email");
    },
  });

  const updateReview = useMutation({
    mutationFn: async ({
      reviewId,
      content,
      star,
    }: {
      reviewId: string;
      content?: string;
      star?: number;
    }) => putReview(id, reviewId, content, star),
    onSuccess: () => {
      queryClient.invalidateQueries(["review", id]);
      queryClient.invalidateQueries(["detail", id]);
      setIsTextAreaShowing(false);
    },
    onError: () => {
      AuthToken.deleteUserInfo();
    },
  });

  const removeReview = useMutation({
    mutationFn: async ({ reviewId }: { reviewId: string }) =>
      deleteReview(id, reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries(["review", id]);
      queryClient.invalidateQueries(["detail", id]);
    },
    onError: () => {
      AuthToken.deleteUserInfo();
    },
  });

  return {
    data,
    isTextAreaShowing,
    setIsTextAreaShowing,
    createReview,
    updateReview,
    removeReview,
  };
}
