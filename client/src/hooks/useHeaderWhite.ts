import { useCallback, useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import { setWhite } from "@/store/features/scrollSlice";

export function useHeaderWhite() {
  const dispatch = useAppDispatch();
  const onWhite = useCallback(() => dispatch(setWhite()), [dispatch]);

  useEffect(() => {
    onWhite();
  }, []);
}
