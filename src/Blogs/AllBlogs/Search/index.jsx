import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    height: 30px;
    padding: 8px 16px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid lightgrey;
    outline: none;
`;

const Search = () => (
  <form>
    <label htmlFor="searchBar">Find</label>
    <Input id="searchBar" type="text" placeholder="search" />
  </form>
);

export default Search;
