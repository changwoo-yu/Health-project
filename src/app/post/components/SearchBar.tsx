import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <div className="flex items-center relative">
      <input
        ref={inputRef}
        className="ml-4 p-3 border border-gray-300 mt-10 mr-4 rounded-md w-[100%]"
        type="text"
        placeholder="게시글 제목 검색"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSearch(e.currentTarget.value);
          }
        }}
      />
      <button type="button" className="absolute right-8 bottom-4" onClick={handleSearchClick}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
