import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { func, string } from 'prop-types';
import { getSingleBlog } from 'Utils';
import {
  breakPoints, colors, spacing, transitionSpeed,
} from 'Components/StyleGuide';
import { LinkStyled, Title, Image } from 'Components/GlobalStyles';

import Loading from 'Components/Loading';
import ErrorMessage from 'Components/ErrorMessage';

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.s2};
`;

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
    transition: all ${transitionSpeed} ease;
  }
`;
Label.displayName = 'Label';

class SingleBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      blog: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;
    getSingleBlog(id)
      .then((blog) => {
        this.setState({
          loading: false,
          blog: blog[0],
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  render() {
    const { loading, blog, error } = this.state;
    const { handleClick } = this.props;
    return (
      <React.Fragment>
        {loading && !error && <Loading />}
        {!loading && !error
          && (
            <BlogWrapper>
              <Image src={blog.image} alt="cat" />
              <LabelWrapper>
                <Label>
                  Created:
                  {' '}
                  {moment(blog.created).format('DD/MM/YYYY')}
                </Label>
                <LinkStyled to="/">
                  <Label onClick={() => handleClick(blog.label)}>
                    <strong>{blog.label}</strong>
                  </Label>
                </LinkStyled>
              </LabelWrapper>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogBody>{blog.body}</BlogBody>
            </BlogWrapper>
          )
        }
        {error && <ErrorMessage singleBlog />}
      </React.Fragment>
    );
  }
}

SingleBlog.propTypes = {
  handleClick: func.isRequired,
  id: string,
};

SingleBlog.defaultProps = {
  id: '',
};

export default SingleBlog;
