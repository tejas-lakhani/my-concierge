import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateFaq from "./AddFaq";
import EditFaq from "./EditFaq";
import FaqSetting from "./FaqSetting";

const FaqRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FaqSetting />} />
        <Route path="/create" element={<CreateFaq />} />
        <Route path="/edit" element={<EditFaq />} />
      </Routes>
    </div>
  );
};

export default FaqRoot;
