import React from 'react'
import blogImg from '../../asset/image/avatar.svg'
const BlogCard = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        props.onDelete(props.blog._id);
      };
    
    return (
        <div className='container border mb-2 '>
            <button onClick={handleDelete} className='float-end btn btn-link' href='/'><i class="fa-sharp fa-solid fa-trash fas fa-star"></i></button>
            <div class="d-flex p-4 position-relative " style={{ height: "150px" }}>
                <img src={blogImg} class="flex-shrink-0 me-3  " alt="..." />
                <div className='overflow-hidden'>
                    <h5 class="mt-0">{props.blog.title}</h5>
                    <p> {props.blog.content}This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
                    {/* <a href="/" class="stretched-link">View Blogs</a> */}
                </div>
            </div>
            <small className='d-flex justify-content-end'>Posted on Date : {props.blog.createdAt} by Author: {props.blog.author}</small>
        </div>
    )
}

export default BlogCard