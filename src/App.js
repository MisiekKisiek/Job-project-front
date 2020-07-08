import React, { Component } from "react";
import Nav from "./components/nav/Nav";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  BrowserRouter,
} from "react-router-dom";
import CreatingPage from "./pages/CreatingPage";
import DocumentationRegister from "./pages/DocumentationRegister";
import RegisterAndLoginPage from "./pages/RegisterAngLoginPage";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="wrap">
            <nav className="navigation">
              <Nav></Nav>
            </nav>
            <main className="main">
              <Route path="/Creating-page">
                <CreatingPage></CreatingPage>
              </Route>
              <Route path="/Documentation-Register">
                <DocumentationRegister></DocumentationRegister>
              </Route>
              <Route path="/LogIn">
                <RegisterAndLoginPage></RegisterAndLoginPage>
              </Route>
              <Route path="/Register">
                <RegisterAndLoginPage></RegisterAndLoginPage>
              </Route>
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
