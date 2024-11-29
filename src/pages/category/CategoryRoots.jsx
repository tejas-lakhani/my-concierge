import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCategory from "./AddCategory";
import Category from "./Category";
import EditCategory from "./EditCategory";

const CategoryRoots = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/create" element={<CreateCategory />} />
        <Route path="/edit" element={<EditCategory />} />
      </Routes>
    </div>
  );
};

export default CategoryRoots;
