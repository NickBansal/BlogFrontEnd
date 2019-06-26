import React from 'react';
import { GlobalStyle } from 'Components/GlobalStyles';
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
    return (
      <React.Fragment>
        <GlobalStyle />
        <h1>BLogs</h1>
      </React.Fragment>
    );
  }
}

export default HomePage;
