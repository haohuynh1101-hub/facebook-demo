import React, { useState } from "react";
import PropTypes from "prop-types";
import "./chatbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faPhoneAlt,
  faTimes,
  faPlus,
  faPhotoVideo,
  faMicrophone,
  faSmile,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Users from "../../components/Helper/Users";
import { hideChatBox } from "./../../redux/actions/uiAction";
import { useSelector, connect } from "react-redux";
import Picker from "emoji-picker-react";
import User from "../Helper/User";

ChatBox.propTypes = {};

function ChatBox(props) {
  const { onHideChatBox } = props;
  const showChatBox = useSelector((state) => state.loading.showChatBox);
  const { user } = useSelector((state) => state.loading);
  const [emojiPanel, setEmojiPanel] = useState(false);
  const [content, setContent] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  function onEmojiClick(event, emojioject) {
    setChosenEmoji(emojioject);
  }
  return (
    <div
      style={{ visibility: showChatBox ? "visible" : "hidden" }}
      className="chat-box"
    >
      <div className="chat-header">
        <Users name={user.name} userId={user.userId} status={user.status} />
        <div>
          <FontAwesomeIcon className="chat-iconheader" icon={faVideo} />
          <FontAwesomeIcon className="chat-iconheader" icon={faPhoneAlt} />
          <FontAwesomeIcon
            onClick={onHideChatBox}
            className="chat-iconheader"
            icon={faTimes}
          />
        </div>
      </div>
      <div className="line"></div>

      <div className="chat-page">
        <div className="msg-inbox">
          <div className="received-chat">
            <img src="https://via.placeholder.com/150" />
            <div className="received-chat-msg">
              <p>Hi!! this is message from your friend</p>
              <span className="time">11:01PM</span>
            </div>
          </div>
          <div className="sent-chat">
            <div className="sent-chat-msg">
              <p>Hi!! this is message from ME</p>
              <span className="time">11:01PM</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div className="msg-inbox">
          <div className="received-chat">
            <img src="https://via.placeholder.com/150" />
            <div className="received-chat-msg">
              <p>Hi!! this is message from your friend</p>
              <span className="time">11:01PM</span>
            </div>
          </div>
          <div className="sent-chat">
            <div className="sent-chat-msg">
              <p>Hi!! this is message from ME</p>
              <span className="time">11:01PM</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div className="msg-inbox">
          <div className="received-chat">
            <img src="https://via.placeholder.com/150" />
            <div className="received-chat-msg">
              <p>Hi!! this is message from your friend</p>
              <span className="time">11:01PM</span>
            </div>
          </div>
          <div className="sent-chat">
            <div className="sent-chat-msg">
              <p>Hi!! this is message from ME</p>
              <span className="time">11:01PM</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div className="msg-inbox">
          <div className="received-chat">
            <img src="https://via.placeholder.com/150" />
            <div className="received-chat-msg">
              <p>Hi!! this is message from your friend</p>
              <span className="time">11:01PM</span>
            </div>
          </div>
          <div className="sent-chat">
            <div className="sent-chat-msg">
              <p>Hi!! this is message from ME</p>
              <span className="time">11:01PM</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
        <div className="msg-inbox">
          <div className="received-chat">
            <img src="https://via.placeholder.com/150" />
            <div className="received-chat-msg">
              <p>Hi!! this is message from your friend</p>
              <span className="time">11:01PM</span>
            </div>
          </div>
          <div className="sent-chat">
            <div className="sent-chat-msg">
              <p>Hi!! this is message from ME</p>
              <span className="time">11:01PM</span>
            </div>
            <img src="https://via.placeholder.com/150" />
          </div>
        </div>
      </div>

      <div className="chat-footer">
        <div className="footer-icons">
          <FontAwesomeIcon className="msg-icons" icon={faPlus} />
          <FontAwesomeIcon className="msg-icons" icon={faPhotoVideo} />
          <FontAwesomeIcon className="msg-icons" icon={faMicrophone} />
          <FontAwesomeIcon
            onClick={() => setEmojiPanel(!emojiPanel)}
            className="msg-icons"
            icon={faSmile}
          />
        </div>
        <div
          className="emojiPanel-chatbox"
          style={{ display: emojiPanel ? "block" : "none" }}
        >
          <Picker onEmojiClick={onEmojiClick} />
        </div>
        <div className="msg-input">
          <input type="text" placeholder="Aa" />
        </div>
        <div>
          <FontAwesomeIcon className="msg-like" icon={faThumbsUp} />
        </div>
      </div>
    </div>
  );
}
function mapDispatchtoProps(dispatch, props) {
  return {
    onHideChatBox: () => {
      dispatch(hideChatBox());
    },
  };
}
export default connect(null, mapDispatchtoProps)(ChatBox);
