import React from "react";
import PropTypes from "prop-types";
import "./message.scss";
import UserSendMsg from "../UserSendMsg";
import UserReceiveMsg from "../UserReceiveMsg";
Message.propTypes = {};

function Message(props) {
  const { listMessage, userInfor } = props;
  //   console.log(message.content, "message");
  //   function getMessageUser1() {
  //     var content = "";
  //     if (message.senderId === userInfor._id) {
  //       content = content + message.content;
  //     }
  //     console.log((content, "contentt"));
  //     return content;
  //   }
  return (
    <div className="message">
      <div className="chat-page">
        <div className="msg-inbox">
          {listMessage.map((message) => {
            if (message.senderId === userInfor._id) {
              return <UserSendMsg message={message} key={message._id} />;
            } else {
              return <UserReceiveMsg message={message} key={message._id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Message;
