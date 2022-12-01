import { useEffect, useCallback } from "react";

import { useAppSelector } from "./useApp";

import { useAppDispatch } from "@/hooks/useApp";
import { black, white } from "@/store/features";

export function useScroll() {
  const { isScrollFix } = useAppSelector(({ scroll }) => ({
    isScrollFix: scroll.isFix,
  }));
  const dispatch = useAppDispatch();
  const onBlack = useCallback(() => dispatch(black()), [dispatch]);
  const onWhite = useCallback(() => dispatch(white()), [dispatch]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [isScrollFix]);

  const handleScroll: EventListener = () => {
    document.documentElement.scrollTop ? onBlack() : onWhite();
  };

  useEffect(() => {
    if (isScrollFix) {
      return;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollFix]);
}
