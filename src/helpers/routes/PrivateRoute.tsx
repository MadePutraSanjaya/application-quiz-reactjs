import React from "react";
import { Navigate } from "react-router-dom";
import { getItem } from "../localStorage/useLocalStorage";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = !!getItem<string>("username");

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
