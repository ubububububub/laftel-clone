import { useOutletContext } from "react-router-dom";

export function useFooterToggle() {
  return useOutletContext<{
    setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }>();
}
