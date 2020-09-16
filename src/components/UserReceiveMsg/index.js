import React from "react";
import PropTypes from "prop-types";
import "./userreceivemsg.scss";
UserReceiveMsg.propTypes = {};

function UserReceiveMsg(props) {
  const { message } = props;
  console.log(message, "mssssssssssss");
  return (
    <div className="received-chat">
      <img src="https://via.placeholder.com/150" />
      <div className="received-chat-msg">
        <p>{message.content}</p>
        <span className="time"></span>
      </div>
    </div>
  );
}

export default UserReceiveMsg;
