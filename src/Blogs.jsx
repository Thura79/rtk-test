import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useGetBlogsQuery } from "./service/blogApi";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  return (
    <div>
      <div className=" d-flex align-items-center justify-content-between">
        <h2 className=" my-4">Blogs</h2>
        <div className="">
          <Link to={'/create'}>
            <button className=" btn btn-primary  ">Create New Blog</button>
          </Link>
        </div>
      </div>
      <div className=" d-flex flex-wrap gap-3">
        {blogs?.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
