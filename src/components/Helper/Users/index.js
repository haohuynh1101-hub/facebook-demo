import React from "react";
import PropTypes from "prop-types";
import "./users.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Users.propTypes = {};

function Users(props) {
  const { image, nameUser, time, icon } = props;
  return (
    <div className="users">
      <img className="image-profile" src={image} />
      <div>
        <div className="textName">{nameUser}</div>
        <div className="time-post">
          <span className="time">{time}</span>
          <span className="time-icon">
            <FontAwesomeIcon icon={icon} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Users;
