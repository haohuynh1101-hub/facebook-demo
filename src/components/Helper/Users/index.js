import React from "react";
import PropTypes from "prop-types";
import "./users.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
Users.propTypes = {};

function Users(props) {
  const { name, userId, status } = props;
  return (
    <div className="users">
      <img className="image-profile" src="https://via.placeholder.com/150" />
      <div>
        <div className="textName">{name}</div>
        <div className={status ? "time-post" : ""}>
          <span className="time">{status ? "Đang hoạt động" : ""}</span>
          {/* <span className="time-icon">
            <FontAwesomeIcon icon={icon} />
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default Users;
