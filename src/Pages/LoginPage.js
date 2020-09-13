import React from "react";
import PropTypes from "prop-types";
import Login from "../components/Login";
import Register from "../components/Register";

LoginPage.propTypes = {};

function LoginPage(props) {
  return (
    <div className="login-page">
      <Login />
      <Register />
    </div>
  );
}

export default LoginPage;
