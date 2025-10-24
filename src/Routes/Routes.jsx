import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Profile from "../Pages/Profile";
import DetailsService from "../Pages/DetailsService";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "../Components/ProtectedRoute";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/popular-section/:id",
        element: (
          <ProtectedRoute>
            <DetailsService />
          </ProtectedRoute>
        ),
        loader: () => fetch("/service.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
