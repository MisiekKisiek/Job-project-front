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

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="wrap">
            <div className="navigation">
              <Nav></Nav>
            </div>
            <div className="main">
              <Route path="/Creating-page">
                <CreatingPage></CreatingPage>
              </Route>
              <Route path="/Documentation-Register">
                <DocumentationRegister></DocumentationRegister>
              </Route>
            </div>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
