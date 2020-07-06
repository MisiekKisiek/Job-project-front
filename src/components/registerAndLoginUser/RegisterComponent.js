import React from "react";
import { connect } from "react-redux";
import { register } from "../../actions/registerAndLogin";

const RegisterComponent = () => {
  return <>{JSON.stringify()}</>;
};

const MSTP = (state) => {
  return {
    data: state.register,
  };
};

const MDTP = { register };

export default connect(MSTP, MDTP)(RegisterComponent);
