import React from "react";
import { connect } from "react-redux";
import { login, token, logout } from "../../actions/registerAndLogin";

const LoginComponent = ({
  data,
  login,
  token,
  handleLabelStyle,
}) => {
  const handleInputs = (e) => {
    const nextData = { ...data };
    if (e.target.name === "email") {
      nextData.email = e.target.value;
    } else if (e.target.name === "password") {
      nextData.password = e.target.value;
    } else if (e.target.name === "submit") {
      nextData.email = "";
      nextData.password = "";
    }
    login(nextData.email, nextData.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((e) => {
        const status = e.status;
        if (status === 401) {
          logout();
          alert("Błędny login lub hasło.");
        } else {
          alert("Zostałeś zalogowany!");
          return e.json();
        }
      })
      .then((e) => {
        token(e.token);
      }).catch(err => { console.log('Błąd:', err) });
    handleInputs(e);
  };

  return (
    <>
      <div className="register-login__login-wrap register-login__wrapp">
        <h1 className="register-login__login-title register-login__title">
          Log in!
        </h1>
        <form className="register-login__login-form register-login__form">
          <div className="register-login__login-email">
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => {
                handleLabelStyle(e);
                handleInputs(e);
              }}
            />
            <label htmlFor="email">E-mail </label>
          </div>
          <div className="register-login__register-password">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleLabelStyle(e);
                handleInputs(e);
              }}
            />
            <label htmlFor="password">Password </label>
          </div>
          <button
            type="submit"
            className=" btn btn-primary"
            name="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Log in!
          </button>
        </form>
      </div>
    </>
  );
};

const MSTP = (state) => {
  return {
    data: state.login,
  };
};

const MDTP = { login, token, logout };

export default connect(MSTP, MDTP)(LoginComponent);
