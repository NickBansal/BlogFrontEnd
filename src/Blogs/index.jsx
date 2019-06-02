import React from 'react';
import autobind from 'react-autobind';
import { getAllBlogs } from '../Utils';
import TopNavigation from './TopNavigation';
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
        allBlogs: blogs,
      });
    }).catch((error) => {
      this.setState({
        error,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <TopNavigation />
        <h1>All blogs</h1>
      </React.Fragment>
    );
  }
}

export default Blogs;
