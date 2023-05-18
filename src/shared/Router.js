import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Hosting from "../pages/Hosting";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/hosting' element={<Hosting />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
