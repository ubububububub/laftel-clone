import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postEmailAuthNumber } from "../apis/index";

import { postJoin } from "@/apis";
import { useEmailArgs } from "@/types/auth";

export function useEmail({
  email,
  password,
  isLaftel,
  isInfo,
  isEvent,
}: useEmailArgs) {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const authEmailNumberMutation = useMutation({
    mutationFn: ({ authNumber }: { authNumber: number }) =>
      postEmailAuthNumber(email, authNumber),
    onSuccess: () => setIsAuth(true),
  });

  const joinMutation = useMutation({
    mutationFn: () => postJoin({ email, password, isLaftel, isInfo, isEvent }),
    onSuccess: () => navigate("/auth/email", { replace: true }),
  });

  return { isAuth, joinMutation, authEmailNumberMutation };
}
