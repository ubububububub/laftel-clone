import { useEffect, useCallback } from "react";

import { getScrollSliceState } from "../store/features/scrollSlice";
import { useAppSelector } from "./useApp";

import { useAppDispatch } from "@/hooks/useApp";
import { setBlack, setWhite } from "@/store/features/scrollSlice";

export function useScroll() {
  const { isFix } = useAppSelector(getScrollSliceState);
  const dispatch = useAppDispatch();
  const onBlack = useCallback(() => dispatch(setBlack()), [dispatch]);
  const onWhite = useCallback(() => dispatch(setWhite()), [dispatch]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [isFix]);

  const handleScroll: EventListener = () => {
    document.documentElement.scrollTop ? onBlack() : onWhite();
  };

  useEffect(() => {
    if (isFix) {
      return;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFix]);
}
