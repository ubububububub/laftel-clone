import { useCallback } from "react";

import { useAppDispatch } from "@/hooks/useApp";
import {
  firstEmpty,
  firstHalf,
  firstFull,
  secondEmpty,
  secondHalf,
  secondFull,
  thirdEmpty,
  thirdHalf,
  thirdFull,
  fourthEmpty,
  fourthHalf,
  fourthFull,
  fifthEmpty,
  fifthHalf,
  fifthFull,
  everyEmpty,
} from "@/store/features/starSlice";

export function useStar() {
  const dispatch = useAppDispatch();

  const onFirstEmpty = useCallback(() => dispatch(firstEmpty()), [dispatch]);
  const onFirstHalf = useCallback(() => dispatch(firstHalf()), [dispatch]);
  const onFirstFull = useCallback(() => dispatch(firstFull()), [dispatch]);

  const onSecondEmpty = useCallback(() => dispatch(secondEmpty()), [dispatch]);
  const onSecondHalf = useCallback(() => dispatch(secondHalf()), [dispatch]);
  const onSecondFull = useCallback(() => dispatch(secondFull()), [dispatch]);

  const onThirdEmpty = useCallback(() => dispatch(thirdEmpty()), [dispatch]);
  const onThirdHalf = useCallback(() => dispatch(thirdHalf()), [dispatch]);
  const onThirdFull = useCallback(() => dispatch(thirdFull()), [dispatch]);

  const onFourthEmpty = useCallback(() => dispatch(fourthEmpty()), [dispatch]);
  const onFourthHalf = useCallback(() => dispatch(fourthHalf()), [dispatch]);
  const onFourthFull = useCallback(() => dispatch(fourthFull()), [dispatch]);

  const onFifthEmpty = useCallback(() => dispatch(fifthEmpty()), [dispatch]);
  const onFifthHalf = useCallback(() => dispatch(fifthHalf()), [dispatch]);
  const onFifthFull = useCallback(() => dispatch(fifthFull()), [dispatch]);

  const onEveryEmpty = useCallback(() => dispatch(everyEmpty()), [dispatch]);

  return {
    onFirstEmpty,
    onFirstHalf,
    onFirstFull,
    onSecondEmpty,
    onSecondHalf,
    onSecondFull,
    onThirdEmpty,
    onThirdHalf,
    onThirdFull,
    onFourthEmpty,
    onFourthHalf,
    onFourthFull,
    onFifthEmpty,
    onFifthHalf,
    onFifthFull,
    onEveryEmpty,
  };
}
