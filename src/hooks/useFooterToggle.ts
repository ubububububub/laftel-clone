import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { showFooter, hideFooter } from "@/store/features/footerSlice";

export function useFooterToggle() {
  const dispatch = useAppDispatch();
  const onShow = useCallback(() => dispatch(showFooter()), [dispatch]);
  const onHide = useCallback(() => dispatch(hideFooter()), [dispatch]);

  useEffect(() => {
    onHide();

    return () => {
      onShow();
    };
  }, []);
}
