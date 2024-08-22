import React, { useContext, useState } from "react";
import Home from "./pages/Home/Home";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { PostList } from "./store/facebook-store";
import CreatePost from "./components/CreatePost/CreatePost";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ForgertUser from "./pages/ForgetUser/ForgertUser";
import Popup from "./components/Popup/Popup";

const App = () => {
        const { signUp, createPost, popup } = useContext(PostList);

  return (
    <>
    {createPost === true && <CreatePost />}
      {signUp === true && <Signup />}
      {popup === true && <Popup />}
      <Routes>
         <Route path="/Main" element={<Home />} /> 
         <Route path="/" element={<Login />} />
         <Route path="/forgetpassword" element={<ForgetPassword />} />
         <Route path="/forgetuser" element={<ForgertUser />} />
        
      </Routes>
    </>
  );
};

export default App;
