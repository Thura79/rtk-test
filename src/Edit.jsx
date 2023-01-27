import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, usePathBlogMutation } from "./service/blogApi";

const Edit = () => {
    const {id} = useParams();
    const {data: blog} = useGetSingleBlogQuery(id);
    const [title, setTitle] = useState( blog?.title );
    const [desc, setDesc] = useState(blog?.desc);
    const [image, setImage] = useState(blog?.image);
    const navigate = useNavigate();
    const [update] = usePathBlogMutation(id);

    const onSubmithandle = (e) => {
        e.preventDefault();
        const newdata = {id, title, desc, image};
        update(newdata);
        navigate('/')
        console.log(title, desc, image);
    }
  return (
    <div>
      <form onSubmit={onSubmithandle}>
        <div className="form-group my-5">
          <label className="form-label">Title</label>
          <input
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group my-5">
          <label className="form-label">Description</label>
          <input
            defaultValue={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group my-5">
          <label className="form-label">Image</label>
          <input
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className=" btn btn-outline-success">Update</button>
        <Link to={"/"}>
          <button className=" btn btn-danger ms-3">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
