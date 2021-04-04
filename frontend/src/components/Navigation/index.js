import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from "../LoginFormModal/LoginForm";
// import SignupFormModal from "../SignupFormModal/SignupForm";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    history.push("/");
  }

  return (
    <div className="container navbarContainer">
      <div className="navbar">
        <Link className="navbar-logo" to="/dashboard"></Link>
        <Link className="navbar-left-link upgrade" to="/dashboard">
          Home
        </Link>

        <div className="navbar-search">
          <input
            className="navbar-search-input"
            type="text"
            placeholder="Search coming soon"
          />
          <button className="navbar-search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <a className="navbar-user">
          <div className="navbar-profile-pic"></div>
          {sessionUser && (
            <span className="navbar-username">{sessionUser.username}</span>
          )}
        </a>
        <button className="navbar-icon-button">
          <i className="fas fa-bell" icon="bell"></i>
        </button>
        <button className="navbar-icon-button">
          <i className="fas fa-envelope" icon="envelope"></i>
        </button>
        <button className="navbar-icon-button">
          {isLoaded && sessionLinks}
        </button>
      </div>
    </div>
  );
}

export default Navigation;
