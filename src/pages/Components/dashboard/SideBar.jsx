import React from "react";
import { Link } from "react-router-dom";
import "../../Components/Component.css";
const sideBar = () => {
  return (
    <div className="side-bar">
      <div className="container">
        <div className="navigation">
          <Link className="side-bar-link" to="/home">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </Link>
          <Link className="side-bar-link" to="/posts">
            <i className="fa-solid fa-pen-to-square"></i>
            <span>Posts</span>
          </Link>
          <Link className="side-bar-link" to="/videos">
            <i className="fa-brands fa-youtube"></i>
            <span> Videos</span>
          </Link>
          <Link className="side-bar-link" to="/lessons">
            <i className="fa-solid fa-chalkboard"></i>
            <span>Lessons</span>
          </Link>
          <Link className="side-bar-link" to="/account">
            <i className="fa-regular fa-envelope"></i>
            <span>Account</span>
          </Link>
          <Link className="side-bar-link" to="/new-lessons">
            <i className="bx bx-chalkboard"></i>
            <span> new lessons</span>
          </Link>
          <Link className="side-bar-link" to="/new-group">
            <i className="fas fa-regular fa-user-group"></i>
            <span>new group</span>
          </Link>
          <Link className="side-bar-link" to="/new-content">
            <i className="fas fa-regular fa-blog"></i>
            <span>new content</span>
          </Link>
          <Link className="side-bar-link" to="/settings">
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </Link>
          <Link className="side-bar-link" to="/history">
            <i className="fas fa-regular fa-clock-rotate-left"></i>
            <span>History</span>
          </Link>
          <Link className="side-bar-link" to="/auth-register">
            <i className="fas fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
