import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { getUserToken, removeUserToken, setUserToken } from "../common/auth/UserToken";
import { User } from "../models/User";
import { APIQueries } from "../common/queries/APIQueries";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

  const getProfile = async () => {
    try {
      const user = await APIQueries.profile();
      setUser(user);
    }
    catch  {}
  }

  useEffect(()  => {
    const userToken = getUserToken();
    if (userToken) {
      setLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      getProfile();
    }
  }, [loggedIn])

  const login = (user: User) => {
    setUserToken(user.token);
    setLoggedIn(true);
  }

  const logout = () => {
    removeUserToken();
    setUser(null);
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

export const ManagedAuthContext: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  return (
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}