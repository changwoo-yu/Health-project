import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }: any) => {
  return (
    <div className="flex items-center relative mt-10">
      <input
        className="ml-4 p-3 border border-gray-300 mt-10 mr-4 rounded-md w-[100%]"
        type="text"
        placeholder="게시글 검색"
        onKeyPress={onSearch}
      />
      <button type="submit" className="absolute right-8 bottom-4">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
