import React, { createContext } from "react";

const AuthUserContext = createContext();

const AuthContext = () => {
  return <AuthUserContext.Provider value={"Home"}></AuthUserContext.Provider>;
};

export default AuthContext;
