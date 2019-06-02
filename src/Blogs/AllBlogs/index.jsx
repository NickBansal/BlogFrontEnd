import React from 'react';

const AllBlogs = ({ blogs }) => (
  <div>
    {blogs.map((blog) => {
      console.log(blog);
      return (
        <div>
          <h4>{blog.title}</h4>
          <h4>{blog.body}</h4>
          <h4>{blog.label}</h4>
          <img src={blog.image} alt="cat" />
        </div>
      );
    })}
  </div>
);

export default AllBlogs;
