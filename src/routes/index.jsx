import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateTermsCondition from "../pages/appPages/Tearms-condition/CreateTermsCondition";
import EditTermsConditions from "../pages/appPages/Tearms-condition/EditTermsConditions";
import TermsConditionRoot from "../pages/appPages/Tearms-condition/TermsConditionRoot";
import AboutUsRoot from "../pages/appPages/about-us/AboutUsRoot";
import CreateAboutUs from "../pages/appPages/about-us/CreateAboutUs";
import EditAboutUs from "../pages/appPages/about-us/EditAboutUs";
import CreatePrivacyPolicy from "../pages/appPages/privacy-policy/CreatePrivacyPolicy";
import EditPrivacyPolicy from "../pages/appPages/privacy-policy/EditPrivacyPolicy";
import PrivacyPolicyRoot from "../pages/appPages/privacy-policy/PrivacyPolicyRoot";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";
import CreateCategory from "../pages/category/AddCategory";
import CategoryRoots from "../pages/category/CategoryRoots";
import EditCategory from "../pages/category/EditCategory";
import CreateSubCategory from "../pages/category/subCategory/AddSubCategory";
import EditSubCategory from "../pages/category/subCategory/EditSubCategory";
import SubCategoryRoots from "../pages/category/subCategory/SubCategoryRoot";
import ChatPage from "../pages/chats/Chat";
import EditFaq from "../pages/setting/faq/EditFaq";
import FaqRoot from "../pages/setting/faq/FaqRoot";
import FaqSetting from "../pages/setting/faq/FaqSetting";
import Setting from "../pages/setting/general-setting/Setting";
import Notification from "../pages/setting/notification/Notification";
import Profile from "../pages/setting/profile/Profile";
import CreateUser from "../pages/user/adminUser/CreateUser";
import EditUser from "../pages/user/adminUser/EditUser";
import UserRoots from "../pages/user/adminUser/UserRoot";
import CreateCustomer from "../pages/user/customers/CreateCustomer";
import Customers from "../pages/user/customers/Customers";
import PermissionList from "../pages/user/permissionList/PermissionList";
import Role from "../pages/user/role/Role";
import ProtectedRoute from "./protectedRoute";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />{" "}
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* User Routes */}
          <Route path="/admin-user" element={<UserRoots />}>
            <Route path="create" element={<CreateUser />} />
            <Route path="edit" element={<EditUser />} />
          </Route>

          {/* Category Routes */}
          <Route path="/category" element={<CategoryRoots />}>
            <Route path="create" element={<CreateCategory />} />
            <Route path="edit" element={<EditCategory />} />
          </Route>

          {/* Sub Category Routes */}
          <Route path="/sub-category" element={<SubCategoryRoots />}>
            <Route path="create" element={<CreateSubCategory />} />
            <Route path="edit" element={<EditSubCategory />} />
          </Route>

          {/* Terms and Condition Routes */}
          <Route path="/terms-and-conditions" element={<TermsConditionRoot />}>
            <Route path="create" element={<CreateTermsCondition />} />
            <Route path="edit" element={<EditTermsConditions />} />
          </Route>

          {/* Privacy Policy Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicyRoot />}>
            <Route path="create" element={<CreatePrivacyPolicy />} />
            <Route path="edit" element={<EditPrivacyPolicy />} />
          </Route>

          {/* About us Routes */}
          <Route path="/about-us" element={<AboutUsRoot />}>
            <Route path="create" element={<CreateAboutUs />} />
            <Route path="edit" element={<EditAboutUs />} />
          </Route>

          {/* Faq us Routes */}
          <Route path="/faq" element={<FaqRoot />}>
            <Route path="create" element={<CreateAboutUs />} />
            <Route path="edit" element={<EditFaq />} />
          </Route>

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
