import React from "react";
import { Route, Routes } from "react-router-dom";
import TermsCondition from "./TermsCondition";
import CreateTermsCondition from "./CreateTermsCondition";
import EditTermsConditions from "./EditTermsConditions";

const TermsConditionRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TermsCondition />} />
        <Route path="/create" element={<CreateTermsCondition />} />
        <Route path="/edit" element={<EditTermsConditions />} />
      </Routes>
    </div>
  );
};

export default TermsConditionRoot;
