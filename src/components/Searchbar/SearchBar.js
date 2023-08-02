import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ lstCategory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState(lstCategory);

  const onChange = (event) => {
    console.log("search ", event.target.value);
    setSearchValue(event.target.value);
  };

  const onSearch = (inputWord) => {
    setSearchValue(inputWord);
    console.log("search ", inputWord);
  };

  return (
    <div className="search-container">
      <div className="search-inner">
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={onChange}
        />
        <button onClick={() => onSearch(searchValue)}> Search </button>
      </div>
      <div className="dropdown">
        {searchValue === ""
          ? categories.map((cat) => (
              <div
                onClick={() => onSearch(cat)}
                className="dropdown-row"
                key={cat}
              >
                {cat}
              </div>
            ))
          : categories
              .filter((category) => {
                return (
                  searchValue &&
                  category.startsWith(searchValue) &&
                  category !== searchValue
                );
              })
              .slice(0, 10)
              .map((cat) => (
                <div
                  onClick={() => onSearch(cat)}
                  className="dropdown-row"
                  key={cat}
                >
                  {cat}
                </div>
              ))}
      </div>
    </div>
  );
};

export default SearchBar;
