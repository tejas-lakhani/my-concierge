import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePrivacyPolicy from "./CreatePrivacyPolicy";
import EditPrivacyPolicy from "./EditPrivacyPolicy";
import PrivacyPolicy from "./PrivacyPolicy";

const PrivacyPolicyRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/create" element={<CreatePrivacyPolicy />} />
        <Route path="/edit" element={<EditPrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default PrivacyPolicyRoot;
