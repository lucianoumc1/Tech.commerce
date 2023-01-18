import React from "react";
import searchIcon from "../assets/search.png";

function SearchBar() {
  return (
    <div className="w-full max-w-xs lg:max-w-7xl mx-auto h-12 shadow-sm border rounded-2xl flex items-center justify-start p-2 bg-white sticky top-5">
      <button>
        <img className="h-5 " src={searchIcon} alt="" />
      </button>
      <input
        type="text"
        className="outline-none h-full pl-2 flex-grow"
        maxLength={25}
      />
    </div>
  );
}

export default SearchBar;
