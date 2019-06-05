import React from 'react';
import { arrayOf, string } from 'prop-types';

const SideBar = ({ labels }) => <h1>{labels}</h1>;

SideBar.propTypes = {
  labels: arrayOf(string),
};

SideBar.defaultProps = {
  labels: [],
};

export default SideBar;
