import React from 'react';
import autobind from 'react-autobind';
import { getAllBlogs } from '../Utils';
import TopNavigation from './TopNavigation';
import AllBlogs from './AllBlogs';
import GlobalStyles from '../Components/GlobalStyles';

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