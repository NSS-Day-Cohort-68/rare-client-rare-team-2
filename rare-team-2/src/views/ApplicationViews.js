import { AdminViews } from "./AdminViews.js";
import { useState, useEffect } from "react";
import React from "react";
import { AuthorViews } from "./AuthorViews.js";
import { useRef } from "react";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localRareUser = localStorage.getItem("rare_user");
    const rareUserObject = JSON.parse(localRareUser);

    setCurrentUser(rareUserObject);
  }, []);

  return (
    <AdminViews currentUser={currentUser} />
  );
};
