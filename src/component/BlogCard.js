import React from 'react'

const BlogCard = (props) => {
    return (
        <div>
            <div class="card my-2">
                <div class="card-header">Posted on Date : {props.blog.createdAt} by Author: {props.blog.author}
                <a className='float-end'href='/'><i class="fa-sharp fa-solid fa-trash fas fa-star"></i></a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.blog.title}</h5>
                    <p class="card-text">{props.blog.content}</p>
                    <a href="/" class="btn btn-primary">View Blog</a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard