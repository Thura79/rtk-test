import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddBlogMutation } from "./service/blogApi";

const Create = () => {
    const [addBlog] = useAddBlogMutation();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    const onSubmithandle = (e) => {
        e.preventDefault();
        const newBlog = {
            id: Date.now(),
            title,
            desc, 
            image
        }
        navigate('/');
        addBlog(newBlog);
        
    }
  return (
    <form onSubmit={onSubmithandle}>
      <div className="form-group my-5">
        <label className="form-label">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
      </div>
      <div className="form-group my-5">
        <label className="form-label">Description</label>
        <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" />
      </div>
      <div className="form-group my-5">
        <label className="form-label">Image</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" className="form-control" />
      </div>
      <button className=" btn btn-outline-primary">Create</button>
      <Link to={'/'}>
        <button className=" btn btn-danger ms-3">Back</button>
      </Link>
    </form>
  );
};

export default Create;
