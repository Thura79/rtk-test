import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from './service/blogApi';

const Detail = () => {
    const {id} = useParams();
    const {data: blog} = useGetSingleBlogQuery(id);

  return (
    <div>
        <img src={blog?.image} width="300px" className='my-3 border rounded' />
        <h3 className=' text-primary'>Title</h3>
        <p>{blog?.title}</p>
        <h5 className=' text-primary'>Description</h5>
        <p>{blog?.desc}</p>

        <Link to={'/'}>
        <button className=' btn btn-outline-danger'>Back to Home</button>
        </Link>

        <Link to={`/edit/${blog?.id}`}>
        <button className=' btn btn-success ms-3'>Edit</button>
        </Link>
        
    </div>
  )
}

export default Detail