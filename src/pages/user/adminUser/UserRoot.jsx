import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminUser from "./AdminUser";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

const UserRoots = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default UserRoots;
