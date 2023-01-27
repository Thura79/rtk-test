import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "./service/blogApi";

const Card = ({ blog }) => {
  const [del] = useDeleteBlogMutation();
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={blog?.image} height="250px" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog?.title}</h5>
          <p className="card-text">{blog?.desc}</p>
          <Link to={`/blogs/${blog?.id}`}>
            <button className="btn btn-primary">Detail</button>
          </Link>
          <button onClick={() => del(blog?.id)} className="btn btn-danger ms-3">Delete</button>
        </div>
      </div>
    </>
  );
};

export default Card;
