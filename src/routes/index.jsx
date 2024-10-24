import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ChatPage from "../pages/chats";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
import Category from "../pages/category/Category";
import SubCategory from "../pages/category/subCategory/SubCategory";
import CreateCategory from "../pages/category/AddCategory";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
