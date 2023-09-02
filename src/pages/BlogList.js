import React, { useEffect, useState } from 'react'
import BlogCard from '../component/BlogCard'
import api from '../asset/api/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const retriveBlogs = async()=>{
    const response = await api.get("/api/blog");
    console.log(response);
    return response.data;
  }
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
    return <BlogCard key={blog.id} blog= {blog} />
  });

  return (
    <div className='container my-3 '>
      {renderBlogs}
    </div>
  )
}

export default BlogList