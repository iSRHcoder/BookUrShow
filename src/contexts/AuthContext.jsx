import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const SS_AUTH = "isAuth";

export const AuthContext = createContext();

const initialAuth =
  sessionStorage.getItem(SS_AUTH) != null
    ? sessionStorage.getItem(SS_AUTH) === "true"
    : false;

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuth);

  useEffect(() => {
    sessionStorage.setItem(SS_AUTH, isAuth);
  }, [isAuth]);

  const loginHandler = () => setIsAuth(true);

  const logoutHandler = () => setIsAuth(false);

  return (
    <AuthContext.Provider value={{ isAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
