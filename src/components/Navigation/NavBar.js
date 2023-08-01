import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import cancelIcon from "../../images/clear.png";
import searchIcon from "../../images/search.png";
import "./NavBar.css";
import Sidebar from "../SideBar/SideBar";

export default function AppNavbar({ myUser }) {
  const [passedUser, setPassedUser] = useState(myUser);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearchValue(value);
  };

  const clearSearchBar = () => {
    setSearchValue("");
  };

  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <header className="headerNav col-12 p-0 d-flex justify-content-evenly">
      <div className="col-1 d-flex justify-content-center">
        {passedUser === null ? (
          <Sidebar isLoggedIn={false} />
        ) : (
          <Sidebar isLoggedIn={true} />
        )}
      </div>
      <div className="col-1 d-flex justify-content-center">
      <Link to={"/home"}>
        <img src={"logo.jpg"} alt="logo" height={"50px"} />
        </Link>
      </div>

      <div className="col-8 d-flex justify-content-evenly justify-item-center">
        <div
          inline
          className="col-6 d-flex justify-content-evenly align-items-center"
        >
          <div className="col-12 d-flex">
            <div className="col-10" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="  Search"
                name="searchValue"
                value={searchValue}
                onChange={handleChange}
                className="col-12"
                style={{
                  border: "solid",
                  borderRadius: "50px",
                  borderColor: "gray",
                }}
              />

              <button
                className="icon-button"
                onClick={clearSearchBar}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "45%",
                  transform: "translateY(-50%)",
                }}
              >
                <img src={cancelIcon} alt="cancelIcon" height={"15px"} />
              </button>
            </div>
            <div className="col-1 d-flex align-items-center">
              <button className="icon-button" onClick={handleSearch}>
                <img src={searchIcon} alt="searchIcon" height={"23px"} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-evenly align-items-center">
          <Link to={"/home"}>
            <label className="nextLink">Home</label>{" "}
          </Link>

          <Link to={"/about"}>
            <label className="nextLink">About us</label>
          </Link>
        </div>

        <div className="col-3 d-flex justify-content-evenly align-items-center">
          <Link to={"/discussion"}>
            <img
              src={"community-icon-9183E8.png"}
              alt="community-icon"
              height={"50px"}
            />
          </Link>
          {passedUser === null ? (
            <div className="d-flex justify-content-evenly align-items-center">
              <Link to={"/register"}>
                <label className="nextLink ">新規登録 </label>
              </Link>
              <Link to={"/login"}>
                <label className="nextLink ">/ ログイン </label>
              </Link>
            </div>
          ) : (
            <Link to={"/profile"}>
              <img className="profile-icon " src={passedUser.icon} alt="Icon" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
