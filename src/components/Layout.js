import React, { useState } from "react";
import AppNavbar from "../components/Navigation/NavBar";
import "./Layout.css";
import Thread from "./Thread/thread";

const Layout = ({ children, checkLogin = false, checkLogout = false }) => {
  const [myUser_sample1, setMyUser_sample1] = useState(null);
  const [myUser_sample2, setMyUser_sample2] = useState({
    name: "aa",
    icon: "https://tukuru-co.com/product/sample/a.jpg",
  });
  const [myUser_sample3, setMyUser_sample3] = useState({
    name: "bb",
    icon: "https://tukuru-co.com/product/sample/b.jpg",
  });

  const [myUser, setMyUser] = useState({});

  const [categories_sample1, setCategories_sample1] = useState([
    "スポーツ",
    "クリエイター",
    "アイドル",
  ]);
  const [categories_sample2, setCategories_sample2] = useState([
    "スポーツ",
    "アーティスト",
    "ミュージシャン",
  ]);
  const [categories_sample3, setCategories_sample3] = useState(null);
  const [categories, setCategories] = useState(categories_sample1);

  return (
    <div>
      {checkLogin===true ? (
        <AppNavbar myUser={myUser_sample2} />
      ) : (
        <AppNavbar myUser={myUser_sample1} />
      )}


      <main>
        {children}
        <Thread />
      </main>
    </div>
  );
};

export default Layout;
