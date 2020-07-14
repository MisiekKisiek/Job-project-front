import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import {
  Route,
  // BrowserRouter as Router,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import CreatingPage from "./pages/CreatingPage";
import DocumentationRegister from "./pages/DocumentationRegister";
import RegisterAndLoginPage from "./pages/RegisterAngLoginPage";
import OtherComponent from "./pages/OtherComponent";

import { connect } from "react-redux";
import { logout } from "./actions/registerAndLogin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
  }

  async checkIsLogged(token, logout) {
    await fetch("http://localhost:9000/checkIsLogged", {
      headers: { Authorization: `bearer ${token}` },
    }).then((e) => {
      if (e.status === 401 || e.status === 404) {
        logout();
        alert("Zostałeś wylogowany!");
      }
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <div className="wrap">
            <nav className="navigation">
              <Nav></Nav>
            </nav>
            <main className="main">
              <Switch>
                <Route exact path="/">
                  {this.props.loginStatus === "unlogged"
                    ? "Niezalogowany"
                    : "Zalogowany"}
                </Route>
                <Route path="/Creating-page">
                  {this.props.loginStatus === "unlogged" ? (
                    <Redirect to="/" />
                  ) : (
                    <CreatingPage
                      checkIsLogged={this.checkIsLogged}
                      token={this.props.token}
                    ></CreatingPage>
                  )}
                </Route>
                {}
                <Route path="/Documentation-Register">
                  {this.props.loginStatus === "unlogged" ? (
                    <Redirect to="/" />
                  ) : (
                    <DocumentationRegister
                      checkIsLogged={this.checkIsLogged}
                      token={this.props.token}
                    ></DocumentationRegister>
                  )}
                </Route>
                <Route path="/LogIn" component={RegisterAndLoginPage}></Route>
                <Route
                  path="/Register"
                  component={RegisterAndLoginPage}
                ></Route>
                <Route path="/Other">
                  <OtherComponent></OtherComponent>
                </Route>
                <Redirect to="/"></Redirect>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

const MSTP = (state) => {
  return { loginStatus: state.token.loginStatus, token: state.token.token };
};

const MDTP = { logout };

export default connect(MSTP, MDTP)(App);
