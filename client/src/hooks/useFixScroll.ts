import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { setBlack, fixScroll, flexScroll } from "@/store/features/scrollSlice";

export function useFixScroll() {
  const dispatch = useAppDispatch();
  const onBlack = useCallback(() => dispatch(setBlack()), [dispatch]);
  const onFix = useCallback(() => dispatch(fixScroll()), [dispatch]);
  const onFlex = useCallback(() => dispatch(flexScroll()), [dispatch]);

  useEffect(() => {
    onBlack();
    onFix();

    return () => {
      onFlex();
    };
  }, []);
}
