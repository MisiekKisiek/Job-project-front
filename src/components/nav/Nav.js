//REACT imports
import React, { Component } from "react";

//REACT-ROUTER imports
import { NavLink } from "react-router-dom";

//REDUX imports
import { connect } from "react-redux";
import { logout } from "../../actions/registerAndLogin";

//OTHER imports
import { PermissibleRender } from "@brainhubeu/react-permissible";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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

  changeProfileIcon = () => {
    window.addEventListener("resize", () => {
      const profil = document.querySelector(".main-nav__item-user");
      if (window.innerWidth < 700) {
        profil.textContent = "User";
      }
      if (window.innerWidth > 700) {
        profil.textContent = "";
        profil.appendChild('<i className="fas fa-users"></i>');
      }
    });
  };

  userMenuCollapse = (type) => {
    const item = document.querySelector(".main-nav__unlogged");
    if (type === "main") {
      item.classList.toggle("main-nav__unlogged--active");
    } else if (type === "other") {
      item.classList.remove("main-nav__unlogged--active");
    }
  };

  // componentDidMount() {
  //   this.changeProfileIcon();
  // }

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
              <div className="main-nav__item-link">
                <img
                  className="main-nav__item-link-img"
                  src={require("../../images/logo.png")}
                  alt="logo"
                />
              </div>
            </li>
            <PermissibleRender
              userPermissions={[this.props.loginStatus]}
              requiredPermissions={["logged"]}
            >
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
            </PermissibleRender>
            <PermissibleRender
              userPermissions={[this.props.loginStatus]}
              requiredPermissions={["logged"]}
            >
              <li className="main-nav__item">
                <NavLink
                  to="/Creating-page"
                  activeClassName="selected"
                  className="main-nav__item-link main-nav_tools"
                  onClick={() => {
                    this.navCollapse("normal");
                  }}
                >
                  Create Page
                </NavLink>
              </li>
            </PermissibleRender>
            <PermissibleRender
              userPermissions={[this.props.loginStatus]}
              requiredPermissions={["logged"]}
            >
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
            </PermissibleRender>
            <PermissibleRender
              userPermissions={[this.props.loginStatus]}
              requiredPermissions={["logged"]}
            >
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
            </PermissibleRender>
            <li className="main-nav__item">
              <div
                className="main-nav__item-link main-nav__item-user"
              >
                <PermissibleRender
                  userPermissions={[this.props.loginStatus]}
                  requiredPermissions={["logged"]}>
                  <div className="main-nav__logged main-nav__item-user-wrap">
                    <ul className="main-nav__logged main-nav__item-user-list">
                      <li className="main-nav__logged-item main-nav__item-user-item">
                        <NavLink to="/" onClick={() => {
                          this.props.logout()
                        }}>Log out</NavLink>
                      </li>
                    </ul>
                  </div>
                </PermissibleRender>
                <PermissibleRender
                  userPermissions={[this.props.loginStatus]}
                  requiredPermissions={["unlogged"]}>
                  <div className="main-nav__unlogged main-nav__item-user-wrap">
                    <ul className="main-nav__unlogged-list main-nav__item-user-list">
                      <li className="main-nav__unlogged-item main-nav__item-user-item">
                        <NavLink
                          to="/LogIn"
                          onClick={() => {
                            this.navCollapse("normal");
                          }}
                        >
                          Log In
                      </NavLink>
                      </li>
                      <li className="main-nav__unlogged-item main-nav__item-user-item">
                        <NavLink
                          to="/Register"
                          onClick={() => {
                            this.navCollapse("normal");
                          }}
                        >
                          Register
                      </NavLink>
                      </li>
                    </ul>
                  </div>
                </PermissibleRender>
              </div>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

const MSTP = (state) => {
  return {
    loginStatus: state.token.loginStatus,
  };
};

const MDTP = { logout };

export default connect(MSTP, MDTP)(Nav);
