import React, { useState } from "react";
import PropTypes from "prop-types";
import "./register.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, connect } from "react-redux";
import { hideRegister } from "../../redux/actions/uiAction";
import { register } from "../../redux/actions/loginAction";
Register.propTypes = {};

function Register(props) {
  const { onHideRegister, onRegister } = props;
  const [firtname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showRegister = useSelector((state) => state.loading.showRegister);
  function handleSubmitRegister(e) {
    e.preventDefault();
    // var userRegister = {
    //   name: firtname + " " + lastname,
    //   email: email,
    //   password: password,
    // };
    // const { name, email, password } = userRegister;
    onRegister(firtname + " " + lastname, email, password);
  }
  return (
    <div
      style={{ visibility: showRegister ? "visible" : "hidden" }}
      className="register"
    >
      <form className="form-register" onSubmit={handleSubmitRegister}>
        <div className="register-title">
          <h2>Sign Up</h2>
          <FontAwesomeIcon
            onClick={onHideRegister}
            className="cancel"
            icon={faTimes}
          />
        </div>
        <p className="text-p">It's quick and easy.</p>
        <div className="line"></div>

        <div className="fullname-input">
          <input
            value={firtname}
            onChange={(e) => setFirstName(e.target.value)}
            className="firstname"
            type="text"
            required
            placeholder="First name"
          />
          <input
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="firstname"
            type="text"
            required
            placeholder="Surname"
          />
        </div>
        <div className="email-input">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Mobile number or email address"
            required="Email is required"
          />
        </div>
        <div className="password-input">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="New password"
            required="Password is required"
          />
        </div>
        <span className="text-date">Date of birth?</span>
        <div className="birthday"></div>
        <div className="sex">
          <div className="sex-male">
            <span for="male">Male</span>
            <input type="radio" id="male" name="gender" value="male" required />
          </div>
          <div className="sex-male">
            <span for="female">Female</span>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              required
            />
          </div>
        </div>
        <div className="note">
          <span>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
            Policy. You may receive SMS notifications from us and can opt out at
            any time.
          </span>
        </div>
        <button type="submit" className="btn-signup" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
function mapDispatchtoProps(dispatch) {
  return {
    onHideRegister: () => {
      dispatch(hideRegister());
    },
    onRegister: (name, email, password) => {
      dispatch(register(name, email, password));
    },
  };
}
export default connect(null, mapDispatchtoProps)(Register);
