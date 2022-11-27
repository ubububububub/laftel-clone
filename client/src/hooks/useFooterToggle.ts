import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { show, hide } from "@/store/slices";

export function useFooterToggle() {
  const dispatch = useAppDispatch();
  const onShow = useCallback(() => dispatch(show()), [dispatch]);
  const onHide = useCallback(() => dispatch(hide()), [dispatch]);

  useEffect(() => {
    onHide();

    return () => {
      onShow();
    };
  }, []);
}
