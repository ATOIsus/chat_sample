import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import communityIcon from "../../images/community-icon-9183E8.png";
import "./NavBar.css";
import SearchBar from "../Searchbar/SearchBar";
import SearchBarSmaller from "../Searchbar/SearchBarSmaller";

export default function AppNavbar({ myUser, categories }) {
  const [passedUser, setPassedUser] = useState(myUser);
  const [lstCategory, setCategories] = useState(categories);

  return (
    <header className="headerNav col-12 p-0  m-0 row ">
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <div className="col-5 col-md-2 d-flex align-items-center">
        <div className="col-6 d-flex justify-content-center">
          {passedUser === null ? (
            <Sidebar isLoggedIn={false} />
          ) : (
            <Sidebar isLoggedIn={true} />
          )}
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <Link to={"/home"}>
            <img src={"logo.jpg"} alt="logo" height={"35px"} width={"100%"} />
          </Link>
        </div>
      </div>

      <div className="col-6 col-md-10 d-flex justify-content-between align-items-center">
        <div className=" bigger-search-bar col-7 col-lg-9 row d-flex justify-content-center">
          <div className=" col-12 col-lg-5 d-flex justify-content-evenly align-items-center">
              <SearchBar lstCategory={lstCategory} />
          </div>
          <div className="normal-link col-lg-7 d-flex justify-content-evenly align-items-center">
            <Link to={"/home"}>
              <label className="nextLinkTemp">ファンクラブを始める</label>
            </Link>

            <Link to={"/about"}>
              <label className="nextLinkTemp">ファンクラブを探す</label>
            </Link>
          </div>
        </div>
       

        <div className="col-12 col-lg-3 d-flex justify-content-evenly align-items-center">
          <Link to={"/discussion"}>
            <img src={communityIcon} alt="community-icon" height={"40px"} />
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
      <div className="smaller-search-bar col-12 px-0  py-1  d-flex">
          <SearchBarSmaller lstCategory={lstCategory} />
        </div>
      <div className="col-12 p-0">
        <div className="reverse-link col-12 d-flex justify-content-evenly align-items-center">
          <Link to={"/home"}>
            <label className="nextLinkRev">ファンクラブを始める</label>
          </Link>
          <div className="vl col-1"></div>

          <Link to={"/about"}>
            <label className="nextLinkRev">ファンクラブを探す</label>
          </Link>
        </div>
      </div>
    </header>
  );
}
