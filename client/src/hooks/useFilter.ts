import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import {
  getFilterSliceState,
  updateCorrect,
  updateInCorrect,
  updateReady,
} from "@/store/features/filterSlice";

export function useFilter() {
  const { filters } = useAppSelector(getFilterSliceState);
  const dispatch = useAppDispatch();

  const onUpdateReady = useCallback(
    (id: number, type: string) => dispatch(updateReady({ id, type })),
    [dispatch],
  );

  const onUpdateCorrect = useCallback(
    (id: number, type: string) => dispatch(updateCorrect({ id, type })),
    [dispatch],
  );

  const onUpdateInCorrect = useCallback(
    (id: number, type: string) => dispatch(updateInCorrect({ id, type })),
    [dispatch],
  );

  return { filters, onUpdateReady, onUpdateCorrect, onUpdateInCorrect };
}
