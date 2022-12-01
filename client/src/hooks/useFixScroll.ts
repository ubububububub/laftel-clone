import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { black, fix, flex } from "@/store/slices";

export function useFixScroll() {
  const dispatch = useAppDispatch();
  const onBlack = useCallback(() => dispatch(black()), [dispatch]);
  const onFix = useCallback(() => dispatch(fix()), [dispatch]);
  const onFlex = useCallback(() => dispatch(flex()), [dispatch]);

  useEffect(() => {
    onBlack();
    onFix();

    return () => {
      onFlex();
    };
  }, []);
}
