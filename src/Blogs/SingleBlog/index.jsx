import React from 'react';
import styled from 'styled-components';
import { getSingleBlog } from 'Utils';
import {
  breakPoints, colors, transitionSpeed,
} from 'Components/StyleGuide';
import { Title, Image } from 'Components/GlobalStyles';

const BlogTitle = styled(Title)`
  text-align: center;
  @media (min-width: ${breakPoints.tablet}) {
  text-align: left;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.highlightText};
  }
  transition: all ${transitionSpeed} ease;
`;
BlogTitle.displayName = 'BlogTitle';

class SingleBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      blog: {}
    }
  }

  componentDidMount() {
    const { id } = this.props
    getSingleBlog(id)
      .then(blog => {
        this.setState({
          loading: false,
          blog: blog[0]
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      }
      )
  }

  render() {
    const { loading, blog, error } = this.state
    return (
      <React.Fragment>
        {loading && !error && <h1>LOADING</h1>}
        {!loading && !error &&
          <React.Fragment>
            <Image src={blog.image} alt="cat" />
            <BlogTitle>{blog.title}</BlogTitle>
          </React.Fragment>
        }
        {error && <h1>Blog does not exist</h1>}
      </React.Fragment>
    )
  }
}

export default SingleBlog;
