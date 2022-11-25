import { useEffect } from "react";

export function useNewTitle(newTitle: string) {
  useEffect(() => {
    document.title = newTitle;
  }, []);
}
