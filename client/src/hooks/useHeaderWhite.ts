import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { white } from "@/store/slices";

export function useHeaderWhite() {
  const dispatch = useAppDispatch();
  const onWhite = useCallback(() => dispatch(white()), [dispatch]);

  useEffect(() => {
    onWhite();
  }, []);
}