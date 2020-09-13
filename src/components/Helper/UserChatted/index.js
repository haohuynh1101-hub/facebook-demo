import React from "react";
import PropTypes from "prop-types";
import "./userchatted.scss";
UserChatted.propTypes = {};

function UserChatted(props) {
  const { userChatted, userInfor } = props;
  function getUserName() {
    var name = null;
    for (let i = 0; i < userChatted.users.length; i++) {
      if (userChatted.users[i].userId != userInfor._id) {
        name = userChatted.users[i].name;
      }
    }
    return name;
  }
  return (
    <div className="user-chatted">
      <img className="image-profile" src="https://via.placeholder.com/150" />
      <div className="chatted-box">
        <span className="textName">{getUserName()}</span>
        <div className="msg-chatted">
          <span className="message-chatbox">
            {userChatted.messages[0].content}
          </span>
          <span className="msg-time">34 phut</span>
        </div>
      </div>
    </div>
  );
}

export default UserChatted;
