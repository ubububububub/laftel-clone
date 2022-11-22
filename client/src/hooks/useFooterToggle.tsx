import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export function useFooterToggle() {
  const { setIsFooterToggle } = useOutletContext<{
    setIsFooterToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  useEffect(() => {
    setIsFooterToggle(false);

    return () => {
      setIsFooterToggle(true);
    };
  }, []);
}
