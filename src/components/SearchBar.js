import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input type="text" placeholder="Search by ID" onChange={handleSearch} />
  );
};

export default SearchBar;