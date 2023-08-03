import { useState } from "react";
import "./SearchBar.css";
import cancelIcon from "../../images/clear.png";
import searchIcon from "../../images/search.png";

const SearchBarSmaller = ({ lstCategory }) => {
  const [searchCat, setSearchValue] = useState("");
  const [categories, setCategories] = useState(lstCategory);
  const [switchValue, setSwitchValue] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    hideSidebar();
    setSearchValue(e.target.value);
  };

  const clearSearchBar = () => {
    setSearchValue("");
  };

  const handleSearch = () => {
    console.log(searchCat);
  };

  function showSearchBar() {
    var searchBar = document.getElementById("searchCatBarSmall");
    searchBar.style.display = "block";

    var cancelIcon = document.getElementById("clearSearchSmall");
    cancelIcon.style.display = "block";
  }

  const handleSwitchSearch = () => {
    if (switchValue === false) {
      showSearchBar();
      hideSidebar();
      setSwitchValue(true);
    } else if (switchValue === true) {
      handleSearch();
      setSwitchValue(false);
    }
  };

  const hideSidebar = () => {
    try {
      var sidebar = document.getElementById("sidebar-menu");
      sidebar.style.display = 'none';
    } catch (e) {}
  };

  const updateSearchValue = (category) => {
    setSearchValue(category);
  };

  return (
    <div className="search-bar-container col-12 m-0 d-flex">

      <div className="search-container col-11" style={{ position: "relative" }}>
        <div className="search-inner col-12">
          <input
            className="search-bar col-12"
            type="text"
            value={searchCat}
            id="searchCatBarSmall"
            placeholder="  さがす"
            name="searchCat"
            onChange={handleChange}
            autoComplete="off"
            onFocus={hideSidebar}
            style={{
              border: "solid",
              borderRadius: "50px",
              borderColor: "gray",
              paddingLeft: "10px",
              display: "none",
            }}
          />
          <button
            id="clearSearchSmall"
            className="icon-button"
            onClick={clearSearchBar}
            style={{
              position: "absolute",
              right: "5px",
              top: "45%",
              transform: "translateY(-50%)",
              display: "none",
            }}
          >
            <img src={cancelIcon} alt="cancelIcon" height={"15px"} />
          </button>
        </div>

        {categories === null ? (
          <div className="dropdown">カテゴリなし</div>
        ) : (
          <div className="dropdown">
            {searchCat === ""
              ? categories.map((cat) => (
                  <div
                    onClick={() => updateSearchValue(cat)}
                    className="dropdown-row"
                    key={cat}
                  >
                    {cat}
                  </div>
                ))
              : categories
                  .filter((category) => {
                    return (
                      searchCat &&
                      category.includes(searchCat) &&
                      category !== searchCat
                    );
                  })
                  .slice(0, 10)
                  .map((cat) => (
                    <div
                      onClick={() => updateSearchValue(cat)}
                      className="dropdown-row"
                      key={cat}
                    >
                      {cat}
                    </div>
                  ))}
          </div>
        )}
      </div>
      <div className="col-1 d-flex align-items-center">
        <button className="icon-button" onClick={handleSwitchSearch}>
          <img src={searchIcon} alt="searchIcon" height={"23px"} />
        </button>
      </div>
    </div>
  );
};

export default SearchBarSmaller;
