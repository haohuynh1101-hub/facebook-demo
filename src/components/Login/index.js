import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./login.scss";
import { showRegister } from "./../../redux/actions/uiAction";
import { login } from "./../../redux/actions/loginAction";

import { connect, useSelector } from "react-redux";
Login.propTypes = {
  onLoginin: PropTypes.func,
};

function Login(props) {
  let history = useHistory();
  const { onShowRegister, onLogin } = props;
  // console.log(history, "history");
  const { userInfor, loggedIn } = useSelector((state) => state.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmitLogin(e) {
    e.preventDefault();
    // var user = {
    //   email: email,
    //   password: password,
    // };
    // console.log(user, "user");
    onLogin(email, password);
  }
  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    } else {
      console.log("login false");
    }
  }, [loggedIn]);
  return (
    <div className="login container">
      <div className="right">
        <h1>facebook</h1>
        <h3>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn
        </h3>
      </div>
      <div className="form-login" onSubmit={handleSubmitLogin}>
        <form>
          <div className="input-user">
            <input
              type="email"
              name="email"
              placeholder="Email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>
          <div className="btn-login">
            <button type="submit" class="btn btn-1 color-blue">
              Sign In
            </button>
          </div>
          <div className="text-qtk">
            <a>Quên tài khoản?</a>
          </div>
          <div className="btn-register">
            <a onClick={onShowRegister} class="btn btn-1 color-green">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
function mapDispatchtoProp(dispatch) {
  return {
    onShowRegister: () => {
      dispatch(showRegister());
    },
    onLogin: (email, password) => {
      dispatch(login(email, password));
    },
  };
}
export default connect(null, mapDispatchtoProp)(Login);
