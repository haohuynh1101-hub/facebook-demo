import React from "react";
import PropTypes from "prop-types";
import Login from "../components/Login";
import Register from "../components/Register";
import GlobalLoading from "../components/GlobalLoading";
LoginPage.propTypes = {};

function LoginPage(props) {
  return (
    <div className="login-page">
      <Login />
      <Register />
      <GlobalLoading />
    </div>
  );
}

export default LoginPage;
