import React from "react";
import PropTypes from "prop-types";
import "./usersendmsg.scss";
UserSendMsg.propTypes = {};

function UserSendMsg(props) {
  const { message } = props;
  console.log(message, "meeeeeeeeeeee");
  return (
    <div className="usersend-msg">
      <div className="sent-chat">
        <div className="sent-chat-msg">
          <p>{message.content}</p>
          <span className="time"></span>
        </div>
        <img src="https://via.placeholder.com/150" />
      </div>
    </div>
  );
}

export default UserSendMsg;
