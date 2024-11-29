import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import CreateAboutUs from "./CreateAboutUs";
import EditAboutUs from "./EditAboutUs";

const AboutUsRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/create" element={<CreateAboutUs />} />
        <Route path="/edit" element={<EditAboutUs />} />
      </Routes>
    </div>
  );
};

export default AboutUsRoot;
