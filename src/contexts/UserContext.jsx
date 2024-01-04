import { createContext, useEffect, useState } from "react";
//import {  useContext } from "react";
import PropTypes from "prop-types";
//import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

const LS_USER_DATA = "userData";
const localUserData = JSON.parse(localStorage.getItem(LS_USER_DATA));

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(localUserData || {});

  // const { isAuth } = useContext(AuthContext);

  const addUserDataHandler = (data) => setUserData(data);

  useEffect(() => {
    localStorage.setItem(LS_USER_DATA, JSON.stringify(userData));
  }, [userData]);

  // useEffect(() => {
  //   if (!isAuth) {
  //     setUserData({});
  //   }
  // }, [isAuth]);

  return (
    <UserContext.Provider value={{ userData, addUserDataHandler }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserProvider;
