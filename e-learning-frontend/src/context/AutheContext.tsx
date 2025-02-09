import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext<{ isAuthenticated: boolean; login: () => void; logout: () => void } | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated')
    navigate('/login')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  if (localStorage.getItem('isAuthenticated'))
    return { ...context, isAuthenticated: true };
  return context;
};
