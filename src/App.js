import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import {
  Route,
  // BrowserRouter as Router,
  BrowserRouter,
  Redirect,
  Switch
} from "react-router-dom";

import MainPage from './pages/MainPage'
import CreatingPage from "./pages/CreatingPage";
import DocumentationRegister from "./pages/DocumentationRegister";
import RegisterAndLoginPage from "./pages/RegisterAngLoginPage";

import { connect } from 'react-redux'
import { logout } from './actions/registerAndLogin'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  async checkIsLogged() {
    console.log(this.props.loginStatus)
    await fetch('http://localhost:9000/checkIsLogged').then(e => {
      if (e.status === 401 || e.status === 404) {
        this.props.logout()
      }
    })
  }

  componentDidMount() {
    this.checkIsLogged()
  }
  componentDidUpdate() {
    this.checkIsLogged()
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
                <Route path="/Creating-page">
                  {this.props.loginStatus === "unlogged" ? <Redirect to={"/"} /> : <CreatingPage />}
                </Route>
                {}
                <Route path="/Documentation-Register" component={DocumentationRegister}></Route>
                <Route path="/LogIn" component={RegisterAndLoginPage}></Route>
                <Route path="/Register" component={RegisterAndLoginPage}></Route>
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
  return ({ loginStatus: state.token.loginStatus })
}

const MDTP = { logout }

export default connect(MSTP, MDTP)(App);
