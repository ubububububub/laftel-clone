import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/useApp";
import {
  updateReady,
  updateCorrect,
  updateInCorrect,
  addGenre,
  subtractGenre,
  addNotGenre,
  subtractNotGenre,
  addTag,
  subtractTag,
  addNotTag,
  subtractNotTag,
  getFilterSliceState,
  resetFilters,
} from "@/store/features/filterSlice";
import { Base64 } from "@/utils/base64";

export function useFilter() {
  const { filters, genres, notGenres, tags, notTags } =
    useAppSelector(getFilterSliceState);

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

  const onAddGenre = useCallback(
    (id: number) => dispatch(addGenre({ id })),
    [dispatch],
  );

  const onSubtractGenre = useCallback(
    (id: number) => dispatch(subtractGenre({ id })),
    [dispatch],
  );

  const onAddNotGenre = useCallback(
    (id: number) => dispatch(addNotGenre({ id })),
    [dispatch],
  );

  const onSubtractNotGenre = useCallback(
    (id: number) => dispatch(subtractNotGenre({ id })),
    [dispatch],
  );

  const onAddTag = useCallback(
    (id: number) => dispatch(addTag({ id })),
    [dispatch],
  );

  const onSubtractTag = useCallback(
    (id: number) => dispatch(subtractTag({ id })),
    [dispatch],
  );

  const onAddNotTag = useCallback(
    (id: number) => dispatch(addNotTag({ id })),
    [dispatch],
  );

  const onSubtractNotTag = useCallback(
    (id: number) => dispatch(subtractNotTag({ id })),
    [dispatch],
  );

  const onResetFilters = useCallback(
    () => dispatch(resetFilters()),
    [dispatch],
  );

  const tansfromStrings = () => {
    const genre = genres.map(({ title }) => title).join(" ");
    const xGenre = notGenres.map(({ title }) => title).join(" ");
    const tag = tags.map(({ title }) => title).join(" ");
    const xTag = notTags.map(({ title }) => title).join(" ");

    return [genre, xGenre, tag, xTag];
  };

  const tansfromFetchHeaders = () => {
    const genre = genres.map(({ title }) => Base64.encode(title)).join(" ");
    const xGenre = notGenres.map(({ title }) => Base64.encode(title)).join(" ");
    const tag = tags.map(({ title }) => Base64.encode(title)).join(" ");
    const xTag = notTags.map(({ title }) => Base64.encode(title)).join(" ");

    return { genre, xGenre, tag, xTag };
  };

  return {
    filters,
    onUpdateReady,
    onUpdateCorrect,
    onUpdateInCorrect,
    onAddGenre,
    onSubtractGenre,
    onAddNotGenre,
    onSubtractNotGenre,
    onAddTag,
    onSubtractTag,
    onAddNotTag,
    onSubtractNotTag,
    onResetFilters,
    tansfromStrings,
    tansfromFetchHeaders,
  };
}
