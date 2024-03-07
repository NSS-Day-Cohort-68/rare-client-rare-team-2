import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Login } from "../components/auth/Login.js";
import { Register } from "../components/auth/Register.js";
import { Welcome } from "../components/Welcome/Welcome.js";
import { AdminNav } from "../components/Nav/AdminNav.js";
import { useRef } from "react";
import { MyPosts } from "../components/Posts/MyPosts.js";

export const AdminViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <AdminNav />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login currentUser={currentUser} />} />
      </Route>
      <Route path="register" element={<Register />} />
      <Route path="myposts" element={<MyPosts currentUser={currentUser} />} />
    </Routes>
  );
};
