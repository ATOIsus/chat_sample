import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex align-items-center">
      <button className="sidebar-toggle-btn" onClick={handleToggleSidebar}>
        <i className="fa fa-2x fa-bars"></i>
      </button>
      {isOpen ? (
        <ul className="sidebar-menu" style={{ left: isOpen ? "0" : "-200px" }}>
          <li>
            <Link to="/">Option 1</Link>
          </li>
          <li>
            <Link to="/">Option 2</Link>
          </li>
          <div>
            <hr style={{ width: "80%", height: "2px", background: "gray" }} />
          </div>
          {isLoggedIn ? (
            <div>
              <li>
                <Link to="/">User</Link>
              </li>
              <li>
                <Link to="/">is Logged in</Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/">No User</Link>
              </li>
              <li>
                <Link to="/">Not logged In</Link>
              </li>
            </div>
          )}
          <div>
            <hr style={{ width: "80%", height: "2px", background: "gray" }} />
          </div>
        </ul>
      ) : null}
    </div>
  );
};

export default Sidebar;
