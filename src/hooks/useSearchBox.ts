import { useEffect } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import {
  clearSearchText,
  hideClear,
  hideSearch,
} from "@/store/features/searchSlice";

export function useSearchBox() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearSearchText());
    dispatch(hideClear());
    dispatch(hideSearch());
  }, []);
}
