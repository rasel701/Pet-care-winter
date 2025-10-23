import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";

export const AuthUserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  console.log(user);

  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => {
      currentUser();
    };
  }, []);

  const logoutUser = () => {
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthUserContext.Provider
      value={{ registerUser, user, logoutUser, setUser, loginUser }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthContext;
