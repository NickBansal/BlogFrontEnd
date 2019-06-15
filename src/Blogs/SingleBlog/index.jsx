import React from 'react';
import styled from 'styled-components';
import { getSingleBlog } from 'Utils';
import { breakPoints, colors } from 'Components/StyleGuide';
import { Title, Image } from 'Components/GlobalStyles';
import Loading from 'Components/Loading'
import ErrorMessage from 'Components/ErrorMessage'

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
BlogWrapper.displayName = 'BlogWrapper';

const BlogTitle = styled(Title)`
  text-align: center;

  @media (min-width: ${breakPoints.tablet}) {
    text-align: left;
  }
`;
BlogTitle.displayName = 'BlogTitle';

const BlogBody = styled.div`
  margin-top: 16px;
  width: 80%;
  max-width: 1000px;
  color: ${colors.textColor};
  line-height: 1.2;
`

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
        {loading && !error && <Loading />}
        {!loading && !error &&
          <BlogWrapper>
            <Image src={blog.image} alt="cat" />
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogBody>{blog.body}</BlogBody>
          </BlogWrapper>
        }
        {error && <ErrorMessage />}
      </React.Fragment>
    )
  }
}

export default SingleBlog;
