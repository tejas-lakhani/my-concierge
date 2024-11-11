import React, { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
// import ChatPage from "../pages/chats/Chat";
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
import CreateCustomer from "../pages/user/customers/CreateCustomer";
import Setting from "../pages/setting/general-setting/Setting";
import Notification from "../pages/setting/notification/Notification";
import FaqSetting from "../pages/setting/faq/FaqSetting";
import Profile from "../pages/setting/profile/Profile";
import EditCategory from "../pages/category/EditCategory";
import ChatPage from "../pages/chats/Chat";

const AppRoute = () => {
  
  const token  = localStorage.getItem("token");
  console.log("token",token)

  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={token ? <MainLayout /> : <Navigate to={"/login"} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/edit-category" element={<EditCategory />} />
          <Route path="/sub-category" element={<SubCategory />} />
          <Route path="/admin-user" element={<AdminUser />} />
          <Route path="/role" element={<Role />} />
          <Route path="/permission-list" element={<PermissionList />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/faq" element={<FaqSetting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoute;
