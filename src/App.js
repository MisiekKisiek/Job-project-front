import React, { Component } from "react";

import {
  Route,
  // BrowserRouter as Router,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";

//PAGES AND COMPONENTS imports
import Nav from "./components/nav/Nav";
import NewsComponent from './components/NewsComponent';
import MainPage from "./pages/MainPage";
import CreatingPage from "./pages/CreatingPage";
import DocumentationRegister from "./pages/DocumentationRegister";
import RegisterAndLoginPage from "./pages/RegisterAngLoginPage";
import OtherComponent from "./pages/OtherComponent";

//REDUX imports
import { connect } from "react-redux";
import { logout } from "./actions/registerAndLogin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
  }

  handleLabelStyle = (tab) => {
    tab.forEach(e => {
      if (e[0].current.value !== "") {
        e[1].current.classList.add("active")
      } else { e[1].current.classList.remove("active") }
    })
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
              {this.props.loginStatus === "unlogged" ? <></> : <NewsComponent></NewsComponent>}
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
                        handleLabelStyle={this.handleLabelStyle}
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
                        handleLabelStyle={this.handleLabelStyle}
                      ></DocumentationRegister>
                    )}
                </Route>
                <Route path="/LogIn" >
                  {this.props.loginStatus === "unlogged" ? <RegisterAndLoginPage handleLabelStyle={this.handleLabelStyle}></RegisterAndLoginPage> : <Redirect to="/"></Redirect>}
                </Route>
                <Route
                  path="/Register"
                >{this.props.loginStatus === "unlogged" ? <RegisterAndLoginPage handleLabelStyle={this.handleLabelStyle}></RegisterAndLoginPage> : <Redirect to="/"></Redirect>}</Route>
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
