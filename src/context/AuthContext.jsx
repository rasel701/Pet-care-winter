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
  const [loading, setLoading] = useState(true);

  console.log(user);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logoutUser = () => {
    return signOut(auth);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const registerUpdaeInfo = (infoObj) => {
    console.log(infoObj);
    return updateProfile(auth.currentUser, infoObj);
  };

  const updateUserProfile = (userObj) => {
    console.log(userObj);
    return updateProfile(auth.currentUser, userObj);
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
        loading,
        setLoading,
        updateUserProfile,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthContext;
