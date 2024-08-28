import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Chat from "../pages/Chat";
import Home from "../pages/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chats" element={<Chat />} />
    </Routes>
  );
};

export default AllRoutes;
