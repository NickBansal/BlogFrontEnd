import React from 'react';
import autobind from 'react-autobind';
import { getAllBlogs } from '../Utils';

class App extends React.Component {
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
        <h1>BLOGS</h1>
      </React.Fragment>
    );
  }
}

export default App;
