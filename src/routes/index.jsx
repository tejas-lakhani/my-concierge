import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ChatPage from "../pages/chats/Chat";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
import Category from "../pages/category/Category";
import SubCategory from "../pages/category/subCategory/SubCategory";
import SaleList from "../pages/sale/SaleList";
import CreateCategory from "../pages/category/AddCategory";
import AdminUser from "../pages/user/adminUser/AdminUser";
import Customers from "../pages/user/customers/Customers";
import PermissionList from "../pages/user/permissionList/PermissionList";
import Role from "../pages/user/role/Role";

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
          <Route path="/admin-user" element={<AdminUser />} />
          <Route path="/role" element={<Role />} />
          <Route path="/permission-list" element={<PermissionList />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/sales-list" element={<SaleList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
