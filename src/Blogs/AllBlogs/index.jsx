import React from 'react';
import {
  arrayOf, shape, string, instanceOf,
} from 'prop-types';

const AllBlogs = ({ blogs }) => (
  <div>
    {blogs.map(blog => (
      <div key={blog.title}>
        <h4>{blog.title}</h4>
        <h4>{blog.body}</h4>
        <h4>{blog.label}</h4>
        <img src={blog.image} alt="cat" />
      </div>
    ))}
  </div>
);

AllBlogs.propTypes = {
  blogs: arrayOf(shape({
    title: string,
    image: string,
    body: string,
    label: string,
    created: instanceOf(Date),
  })),
};

AllBlogs.defaultProps = {
  blogs: [],
};

export default AllBlogs;
