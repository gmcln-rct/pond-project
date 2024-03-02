import React from "react";

// user enters word to search for from verb list

export default function Search(props) {
    const { searchValue, setSearchValue } = props;
  return (
    <>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search for a verb"
      />
    </>
  );
}
