/* eslint-disable react/no-unused-state */
import React from 'react';
import autobind from 'react-autobind';
import GlobalStyles from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';
import TopNavigation from 'Blogs/TopNavigation';
import AllBlogs from 'Blogs/AllBlogs';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBlogs: [],
    };
    autobind(this);
  }

  componentDidMount() {
    getAllBlogs().then((blogs) => {
      this.setState({
        allBlogs: blogs[0],
      });
    }).catch((error) => {
      this.setState({
        error,
      });
    });
  }

  render() {
    const { allBlogs } = this.state;
    return (
      <React.Fragment>
        <GlobalStyles />
        <TopNavigation />
        <AllBlogs blogs={allBlogs} />
      </React.Fragment>
    );
  }
}

export default Blogs;
