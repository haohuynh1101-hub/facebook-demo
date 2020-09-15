import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./user.scss";
import { useSelector } from "react-redux";
import Users from "../Users";
import ChatBox from "../../ChatBox";
User.propTypes = {};

function User(props) {
  const { name, userId, status, onShowChatBox } = props;
  const userInfor = useSelector((state) => state.user.listUser);
  const user = {
    name: name,
    userId: userId,
    status: status,
  };
  return (
    <Fragment>
      <div className="user" onClick={() => onShowChatBox(user)}>
        <div>
          <img
            className="image-profile"
            src="https://via.placeholder.com/150"
          />
          <span className="textName">{name}</span>
        </div>

        <div className={status ? "circle-online" : "circle-offline"}></div>
      </div>
    </Fragment>
  );
}

export default User;
