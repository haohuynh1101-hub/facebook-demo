import React from "react";
import PropTypes from "prop-types";
import "./usernotify.scss";
UserNotify.propTypes = {};

function UserNotify(props) {
  const { img, userName, textNotify, time } = props;

  return (
    <div className="user-notify">
      <img className="image-profile" src={img} />
      <div className="notify">
        <span className="username-notify">{userName}</span>
        <span className="text-Notify">{textNotify}</span>
        <div>
          <span className="time">{time}</span>
        </div>
      </div>
    </div>
  );
}

export default UserNotify;
