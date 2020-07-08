import React, { Component } from "react";
import { Route } from "react-router-dom";
import RegisterCompoennt from "../components/registerAndLoginUser/RegisterComponent";
import LoginComponent from "../components/registerAndLoginUser/LoginComponent";

class RegisterAndLoginPage extends Component {
  state = {};
  handleLabelStyle = (e) => {
    const label = e.target.parentNode.childNodes[1];
    if (e.target.value !== "") {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
  };
  render() {
    return (
      <>
        <div className="register-login__wrap">
          <Route path="/LogIn">
            <LoginComponent
              handleLabelStyle={this.handleLabelStyle}
            ></LoginComponent>
          </Route>
          <Route path="/Register">
            <RegisterCompoennt
              handleLabelStyle={this.handleLabelStyle}
            ></RegisterCompoennt>
          </Route>
        </div>
      </>
    );
  }
}

export default RegisterAndLoginPage;
