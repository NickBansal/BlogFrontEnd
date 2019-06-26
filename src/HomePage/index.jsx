import React, { useState, useEffect } from 'react';
import GlobalStyle from 'Components/GlobalStyles';
import { getAllBlogs } from 'Utils';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllBlogs()
      .then(blogs => setData(blogs[0]))
      .catch(err => setError(err));
  }, []);
  console.log(data);
  console.log(error);
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>Blogs</h1>
    </React.Fragment>
  );
};

export default HomePage;


// componentDidMount() {
//   getAllBlogs().then((blogs) => {
//     this.setState({
//       allBlogs: blogs[0],
//     });
//   }).catch((error) => {
//     this.setState({
//       error,
//     });
//   });
// }
