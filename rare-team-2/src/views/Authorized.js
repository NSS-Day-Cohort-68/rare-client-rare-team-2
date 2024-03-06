import { Navigate, useLocation } from "react-router-dom";
import { useRef } from "react";

export const Authorized = ({ children }) => {
  let location = useLocation();

  // Check if user is logged in
  const userLoggedIn = localStorage.getItem("rare_user") !== null;

  if (userLoggedIn) {
    // Render the child components (e.g., ApplicationViews)
    return children;
  } else {
    // Redirect to login page if user is not logged in
    return <Navigate to={`/login`} state={{ from: location }} />;
  }
};

