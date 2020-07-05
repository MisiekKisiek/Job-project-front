import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = {
    windowWidth: 0,
    windowHeight: 0,
  };

  navCollapse = (action) => {
    const items = document.querySelectorAll(
      ".main-nav__item + .main-nav__item"
    );
    if (action === "burger") {
      items.forEach((e) => e.classList.toggle("active"));
    } else if (action === "normal") {
      items.forEach((e) => e.classList.remove("active"));
    }
  };
  render() {
    return (
      <>
        <nav className="main-nav">
          <ul className="main-nav__list-item">
            <div
              onClick={() => {
                this.navCollapse("burger");
              }}
              className="main-nav__burger"
            >
              <i className="fas fa-bars"></i>
            </div>
            <li className="main-nav__item">
              <a className="main-nav__item-link">
                <img
                  className="main-nav__item-link-img"
                  src={require("../../images/logo.png")}
                  alt="logo"
                />
              </a>
            </li>
            <li className="main-nav__item">
              <NavLink
                exact
                to="/"
                activeClassName="selected"
                className="main-nav__item-link"
                onClick={() => {
                  this.navCollapse("normal");
                }}
              >
                Main Page
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                to="/Creating-page"
                activeClassName="selected"
                className="main-nav__item-link main__nav_tools"
                onClick={() => {
                  this.navCollapse("normal");
                }}
              >
                Tools
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                to="/Documentation-Register"
                activeClassName="selected"
                className="main-nav__item-link"
                onClick={() => {
                  this.navCollapse("normal");
                }}
              >
                Register
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                to="/Other"
                activeClassName="selected"
                className="main-nav__item-link"
                onClick={() => {
                  this.navCollapse("normal");
                }}
              >
                Other
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                to="/LogIn"
                activeClassName="selected"
                className="main-nav__item-link"
                onClick={() => {
                  this.navCollapse("normal");
                }}
              >
                <i className="fas fa-users"></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
