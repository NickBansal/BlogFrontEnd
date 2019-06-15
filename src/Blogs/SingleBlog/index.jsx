import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { getSingleBlog } from 'Utils';
import { breakPoints, colors, spacing } from 'Components/StyleGuide';
import { LinkStyled } from 'Components/GlobalStyles'
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

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.s2};
`

const Label = styled.h4`
  margin: 0;
  font-size: 15px;
  color: ${colors.textColor};
  font-weight: 100;

  &:nth-child(2) {
    &:hover {
      cursor: pointer;
      color: ${colors.highlightText};
    }
  }
`;

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
            <LabelWrapper>
              <Label>
                Created: {moment(blog.created).format('DD/MM/YYYY')}
              </Label>
              <LinkStyled to="/">
                <Label onClick={() => console.log('Hello')}>
                  <strong>{blog.label}</strong>
                </Label>
              </LinkStyled>
            </LabelWrapper>
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
