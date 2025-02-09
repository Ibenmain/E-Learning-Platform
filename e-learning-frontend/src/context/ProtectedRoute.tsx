import { Navigate } from "react-router";
import { useAuth } from "./AutheContext";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
