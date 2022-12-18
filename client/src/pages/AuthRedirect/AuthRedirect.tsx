import { Navigate } from "react-router-dom";

export function AuthRedirect() {
  return <Navigate to='/auth/login' replace />;
}
