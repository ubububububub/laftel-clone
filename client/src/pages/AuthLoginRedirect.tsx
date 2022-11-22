import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AuthLoginRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/login");
  }, []);

  return null;
}
