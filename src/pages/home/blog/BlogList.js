import React, { useEffect, useState } from 'react'
import BlogCard from '../../../component/card/BlogCard'
import api from '../../../api/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const retriveBlogs = async()=>{
    const response = await api.get("/api/blog");
    console.log(response);
    return response.data;
  }

  const handleDelete = async (blogId) => {
      await api.delete(`/api/blog/${blogId}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
  };
  useEffect(() => {
    const getAllBlogs = async ()=>{
      const allBlogs = await retriveBlogs();
      if (allBlogs) { 
        setBlogs(allBlogs);
      }
    }
    getAllBlogs();
  }, [])
  
  const renderBlogs = blogs.map((blog)=>{
    return <BlogCard key={blog._id} onDelete={handleDelete} blog= {blog} />
  });

  return (
    <div className='container my-3 '>
      {renderBlogs}
    </div>
  )
}

export default BlogList