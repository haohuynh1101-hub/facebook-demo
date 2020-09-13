import React from "react";
import PropTypes from "prop-types";
import "./chatboxmsg.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import User from "../Helper/User";
import Profile from "../Helper/Profile";
import { useSelector } from "react-redux";
ChatBoxMsg.propTypes = {};

function ChatBoxMsg(props) {
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
        <Profile img="https://via.placeholder.com/150" userName="Hao Huynh" />
        <Profile img="https://via.placeholder.com/150" userName="Hao Huynh" />
      </div>
      <div className="chatBox-footer">
        <a>Xem tất cả trong Messenger</a>
      </div>
    </div>
  );
}

export default ChatBoxMsg;
