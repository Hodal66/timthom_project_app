import React from "react";
import { MdSearch } from "react-icons/md";
import "./search.css";
function SearchFunction() {
  return (
    <div className="searchContentContainer thirdBackGroundBlueColor">
      <h4>Search</h4>
      <div className="searchInputContainer">
        <input type="search" placeholder="Search Key Word" autoFocus />
        <MdSearch style={{ fontSize: "2rem" }} />
        <hr />
      </div>
    </div>
  );
}

export default SearchFunction;
