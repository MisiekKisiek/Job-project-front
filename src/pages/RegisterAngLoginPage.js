import React, { Component } from "react";
import { Route } from "react-router-dom";
import RegisterCompoennt from "../components/registerAndLoginUser/RegisterComponent";
import LoginComponent from "../components/registerAndLoginUser/LoginComponent";

class RegisterAndLoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="register-login__wrap">
          <Route path="/LogIn">
            <LoginComponent
              handleLabelStyle={this.props.handleLabelStyle}
            ></LoginComponent>
          </Route>
          <Route path="/Register">
            <RegisterCompoennt
              handleLabelStyle={this.props.handleLabelStyle}
            ></RegisterCompoennt>
          </Route>
        </div>
      </>
    );
  }
}

export default RegisterAndLoginPage;
