import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Blogs";
import Create from "./Create";
import Detail from "./Detail";
import Edit from "./Edit";
import { useGetBlogsQuery } from "./service/blogApi";

const App = () => {
  const { data: blogs } = useGetBlogsQuery();
  console.log(blogs);
  return (
    <div className="container">
      
      <Routes>
        <Route path="/" element={<Blogs/>}  />
        <Route path="/create" element={<Create/>}  />
        <Route path="/blogs/:id" element={<Detail/>}  />
        <Route path="/edit/:id" element={<Edit/>}  />
      </Routes>
    </div>
  );
};

export default App;
