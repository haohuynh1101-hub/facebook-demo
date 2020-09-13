import React from "react";
import PropTypes from "prop-types";
import "./user.scss";
import { useSelector } from "react-redux";
User.propTypes = {};

function User(props) {
  const { name, userId, status } = props;
  const userInfor = useSelector((state) => state.user.listUser);
  return (
    <div className="user">
      <div>
        <img className="image-profile" src="https://via.placeholder.com/150" />
        <span className="textName">{name}</span>
      </div>

      <div className={status ? "circle-online" : "circle-offline"}></div>
    </div>
  );
}

export default User;
