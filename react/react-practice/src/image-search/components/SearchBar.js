import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleOnChange = ({ target }) => {
    setTerm(target.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleOnChange} />
    </form>
  );
};

export default SearchBar;
