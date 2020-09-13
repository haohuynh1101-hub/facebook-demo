import React from "react";
import PropTypes from "prop-types";
import "./chatboxmsg.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import UserChatted from "../Helper/UserChatted";
ChatBoxMsg.propTypes = {};

function ChatBoxMsg(props) {
  const { usersChatted, userInfor } = props;
  const showChatBoxHeader = useSelector(
    (state) => state.loading.showChatBoxHeader
  );

  return (
    <div
      style={{ visibility: showChatBoxHeader ? "visible" : "hidden" }}
      className="chatBox-msg"
    >
      <div className="right-header">
        <div className="text-msg">Messenger</div>
        <div>
          <FontAwesomeIcon className="right-icon" icon={faVideo} />
          <FontAwesomeIcon className="right-icon" icon={faSearch} />
          <FontAwesomeIcon className="right-icon" icon={faEllipsisH} />
        </div>
      </div>
      <div className="chatBox-input">
        <FontAwesomeIcon className="icon-search" icon={faSearch} />
        <input type="text" placeholder="Tim kiem tren Messenger" />
      </div>
      <div className="chatBox">
        {usersChatted.map((userChatted) => (
          <UserChatted
            userChatted={userChatted}
            key={userChatted._id}
            userInfor={userInfor}
          />
        ))}
      </div>
      <div className="chatBox-footer">
        <a>Xem tất cả trong Messenger</a>
      </div>
    </div>
  );
}

export default ChatBoxMsg;
