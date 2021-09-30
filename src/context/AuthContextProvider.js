import React, { useContext, createContext } from "react";

//! Create context for autentication data
const AuthContext = createContext();

//! Define a function to get data from Auth context
function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = () => {
  return <div></div>;
};

export default AuthContextProvider;
