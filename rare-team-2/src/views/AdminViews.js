
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Login } from '../components/auth/Login.js';
import { Register } from '../components/auth/Register.js';
import { Welcome } from '../components/Welcome/Welcome.js';
import { AdminNav } from '../components/Nav/AdminNav.js';
import { Category } from '../components/category/Category.js';
import { NewCategoryForm } from '../components/category/NewCategoryForm.js';
import { EditCategoryForm } from '../components/category/EditCategoryForm.js';
import { MyPosts } from "../components/Posts/MyPosts.js";
import { AllPosts } from '../components/Posts/AllPosts.js';

export const AdminViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {['/login', '/register'].includes(window.location.pathname) ? null : <AdminNav />}
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login currentUser={currentUser} />} />

        <Route path="myposts" element={<MyPosts currentUser={currentUser} />} />
        <Route path="allposts" element={<AllPosts currentUser={currentUser} />} />
        <Route path="register" element={<Register />} />
        <Route path="categoryManager" element={<Category />} />
      </Route>
      <Route path="newCategory" element={<NewCategoryForm />} />
      <Route path="editCategory/:categoryId" element={<EditCategoryForm />} />
    </Routes>
  );
};

