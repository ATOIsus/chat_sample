import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import cancelIcon from "../../images/clear.png";
import searchIcon from "../../images/search.png";
import "./NavBar.css";

export default function AppNavbar({ myUser }) {
  const [passedUser, setPassedUser] = useState(myUser);

  return (
    <header className="headerNav col-12 p-0 d-flex justify-content-evenly">
      <div className="col-lg-1 d-flex justify-content-center" as={Link} to="/">
        <img src={"logo.jpg"} alt="logo" height={"50px"} />
      </div>

      <div className="col-9 d-flex justify-content-evenly justify-item-center">
        <Form
          inline
          className="col-6 d-flex justify-content-evenly align-items-center"
        >
          <div className="col-12 d-flex">
            <div className="col-10" style={{ position: "relative" }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="col-10"
                style={{ paddingRight: "30px", borderRadius: "20px" }}
              />

              <button
                className="icon-button"
                style={{
                  position: "absolute",
                  right: "19px",
                  top: "47%",
                  transform: "translateY(-50%)",
                }}
              >
                <img src={cancelIcon} height={"15px"} />{" "}
              </button>
            </div>
            <div className="col-1 d-flex align-items-center">
              <button className="icon-button">
                <img src={searchIcon} height={"23px"} />
              </button>
            </div>
          </div>
        </Form>
        <div className="col-3 d-flex justify-content-evenly align-items-center">
          <Link to={"/"}>
            <label className="nextLink">Home</label>{" "}
          </Link>

          <Link to={"/"}>
            <label className="nextLink">About us</label>
          </Link>
        </div>

        <div className="col-3 d-flex justify-content-evenly align-items-center">
          <Link to={"/"}>
            <img
              src={"community-icon-9183E8.png"}
              alt="community-icon"
              height={"50px"}
            />
          </Link>
          {passedUser == null ? (
            <Link to={"/"}>
              <label className="nextLink ">新規登録 / ログイン</label>
            </Link>
          ) : (
            <Link to={"/"}>
              <img className="profile-icon " src={passedUser.icon} alt="Icon" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
