import React, { useContext } from "react";
import { AuthUserContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthUserContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location} />;
  }

  return children;
};

export default ProtectedRoute;
