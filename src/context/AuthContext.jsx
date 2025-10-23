import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthUserContext = createContext("");

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const userName = "Mosharrof Korim";

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logoutUser = () => {
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const registerUpdaeInfo = (infoObj) => {
    return updateProfile(auth.currentUser, infoObj);
  };

  return (
    <AuthUserContext.Provider
      value={{
        registerUser,
        user,
        logoutUser,
        setUser,
        loginUser,
        googleLogin,
        forgetPassword,
        registerUpdaeInfo,
        userName,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthContext;
