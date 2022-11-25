import { useCallback, useEffect, useLayoutEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import { black, white, fix, flex } from "@/store/slices";

export function useFixScroll() {
  const { isScrollFix } = useAppSelector(({ scroll }) => ({
    isScrollFix: scroll.isFix,
  }));
  const dispatch = useAppDispatch();
  const onFix = useCallback(() => dispatch(fix()), [dispatch]);
}
