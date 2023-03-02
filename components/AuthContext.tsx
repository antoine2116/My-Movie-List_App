import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { removeUserToken, setUserToken } from "../common/auth/UserToken";
import { User } from "../models/User";

export interface AuthState {
  user : User | null;
  loggedIn: boolean;
}

const initialState = {
  loggedIn: false,
  user: null
}

export const AuthContext = createContext<AuthState | any>(initialState);
AuthContext.displayName = "AuthContext";

export const AuthProvider: FC<{ children?: ReactNode }> = (props) => {  
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    setUserToken(token);
    setLoggedIn(true);
  }

  const logout = () => {
    removeUserToken();
    setLoggedIn(false);
  }

  const values = useMemo(
    () => ({
      loggedIn,
      user,
      login,
      logout
    }), [loggedIn, user])

    return <AuthContext.Provider value={values} {...props} />
}

export const useAuth = () => useContext(AuthContext);
