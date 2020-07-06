import React, { Component } from "react";
import { Route } from "react-router-dom";
import RegisterCompoennt from "../components/registerAndLoginUser/RegisterComponent";
import LoginComponent from "../components/registerAndLoginUser/LoginComponent";

class RegisterAndLoginPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="register-login__wrap">
          <Route path="/LogIn">
            <LoginComponent></LoginComponent>
          </Route>
          <Route path="/Register">
            <RegisterCompoennt></RegisterCompoennt>
          </Route>
        </div>
      </>
    );
  }
}

export default RegisterAndLoginPage;
