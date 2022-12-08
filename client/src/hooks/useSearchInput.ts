import { useCallback } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import {
  showSearch,
  hideSearch,
  writeSearchText,
  clearSearchText,
  showClear,
  hideClear,
} from "@/store/features/searchSlice";

export function useSearchInput() {
  const dispatch = useAppDispatch();

  const onShowSearch = useCallback(() => dispatch(showSearch()), []);
  const onHideSearch = useCallback(() => dispatch(hideSearch()), []);
  const onWriteSearchText = useCallback(
    (value: string) => dispatch(writeSearchText(value)),
    [dispatch],
  );
  const onClearSearchText = useCallback(
    () => dispatch(clearSearchText()),
    [dispatch],
  );
  const onShowClear = useCallback(() => dispatch(showClear()), []);
  const onHideClear = useCallback(() => dispatch(hideClear()), []);

  return {
    onShowSearch,
    onHideSearch,
    onWriteSearchText,
    onClearSearchText,
    onShowClear,
    onHideClear,
  };
}
