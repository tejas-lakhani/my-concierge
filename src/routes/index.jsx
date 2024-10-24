import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ChatPage from "../pages/chats";
import Category from "../pages/category/Category";
import SubCategory from "../pages/category/subCategory/SubCategory";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
