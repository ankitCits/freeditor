import React from "react";
import { Route, Routes } from "react-router-dom";
import EditPage from "../Page/Editor";
import NoPage from "../Page/NoPage";
import HomePage from "../Pages/HomePage";

const RouteHandler = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="image-editor" element={<EditPage />} />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default RouteHandler;
