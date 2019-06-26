import React from 'react';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    const { allBlogs, error } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        {allBlogs && <h1>Blogs</h1>}
        {error && <h1>Error</h1>}
      </React.Fragment>
    );
  }
}

export default HomePage;
