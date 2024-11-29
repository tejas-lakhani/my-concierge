import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateSubCategory from "./AddSubCategory";
// import EditCategory from "./EditCategory";
import SubCategory from "./SubCategory";
import EditSubCategory from "./EditSubCategory";

const SubCategoryRoots = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SubCategory />} />
        <Route path="/create" element={<CreateSubCategory />} />
        <Route path="/edit" element={<EditSubCategory />} />
      </Routes>
    </div>
  );
};

export default SubCategoryRoots;
