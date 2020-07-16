import React, { useRef } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/registerAndLogin";

const RegisterComponent = ({ data, register, handleLabelStyle }) => {
  const firstNameLabel = useRef(null);
  const firstNameInput = useRef(null);
  const lastNameLabel = useRef(null);
  const lastNameInput = useRef(null);
  const emailLabel = useRef(null);
  const emailInput = useRef(null);
  const passwordLabel = useRef(null);
  const passwordInput = useRef(null);

  const handleInputs = (e) => {
    const nextData = { ...data };
    if (e.target.name === "first-name") {
      nextData.first_name = e.target.value;
    } else if (e.target.name === "last-name") {
      nextData.last_name = e.target.value;
    } else if (e.target.name === "email") {
      nextData.email = e.target.value;
    } else if (e.target.name === "password") {
      nextData.password = e.target.value;
    } else if (e.target.name === "submit") {
      nextData.first_name = "";
      nextData.last_name = "";
      nextData.email = "";
      nextData.password = "";
    }
    register(
      nextData.first_name,
      nextData.last_name,
      nextData.email,
      nextData.password
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((e) => e.json())
      .then((res) => {
        alert(res)
      })
      .catch((err) => alert("Coś poszło nie tak :/"));
    handleInputs(e);
  };

  return (
    <>
      <div className="register-login__register-wrap register-login__wrapp">
        <h1 className="register-login__register-title register-login__title">
          Get register if You are a part of S52 team!
        </h1>
        <form className="register-login__register-form register-login__form">
          <div className="register-login__register-first-name">
            <input
              type="text"
              name="first-name"
              value={data.first_name}
              onChange={(e) => {
                handleLabelStyle([[firstNameInput, firstNameLabel]]);
                handleInputs(e);
              }}
              ref={firstNameInput}
            />
            <label htmlFor="first-name" ref={firstNameLabel}>First name </label>
          </div>
          <div className="register-login__register-last-name">
            <input
              type="text"
              name="last-name"
              value={data.last_name}
              onChange={(e) => {
                handleLabelStyle([[lastNameInput, lastNameLabel]]);
                handleInputs(e);
              }}
              ref={lastNameInput}
            />
            <label htmlFor="last-name" ref={lastNameLabel}>Last name </label>
          </div>
          <div className="register-login__register-email">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => {
                handleLabelStyle([[emailInput, emailLabel]]);
                handleInputs(e);
              }}
              ref={emailInput}
            />
            <label htmlFor="email" ref={emailLabel}>e-mail </label>
          </div>
          <div className="register-login__register-password">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleLabelStyle([[passwordInput, passwordLabel]]);
                handleInputs(e);
              }}
              ref={passwordInput}
            />
            <label htmlFor="password" ref={passwordLabel}>password </label>
          </div>
          <button
            type="submit"
            className=" btn btn-primary"
            name="submit"
            onClick={async (e) => {
              await handleSubmit(e);
              handleLabelStyle([[firstNameInput, firstNameLabel], [lastNameInput, lastNameLabel], [emailInput, emailLabel], [passwordInput, passwordLabel]]);
            }}
          >
            Register!
          </button>
        </form>
      </div>
    </>
  );
};

const MSTP = (state) => {
  return {
    data: state.register,
  };
};

const MDTP = { register };

export default connect(MSTP, MDTP)(RegisterComponent);
