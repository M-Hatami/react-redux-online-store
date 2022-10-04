import React from "react";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice";

const searchIconUrl = "./img/icons/search.svg";
const clearIconUrl = "./img/icons/clear.svg";

export const SearchTerm = (props) => {
  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <img id="search-icon" alt="" src={searchIconUrl} />
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder="جستجو"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type="button"
          id="search-clear-button"
        >
          <img src={clearIconUrl} alt="" />
        </button>
      )}
    </div>
  );
};
