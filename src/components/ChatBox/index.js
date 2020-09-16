import React, { useState, useEffect } from "react";
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
import { fetchMessages } from "../../redux/actions/messageAction";
import Message from "../Message";

ChatBox.propTypes = {};

function ChatBox(props) {
  const { onHideChatBox, onFetchMessages } = props;
  const showChatBox = useSelector((state) => state.loading.showChatBox);
  const listMessage = useSelector((state) => state.message.listMessages);
  const { user } = useSelector((state) => state.loading);
  const { userInfor } = useSelector((state) => state.login);
  const [emojiPanel, setEmojiPanel] = useState(false);
  const [content, setContent] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  function onEmojiClick(event, emojioject) {
    setChosenEmoji(emojioject);
  }
  useEffect(() => {
    // onFetchMessages({ user1: user.userId, user2: userInfor._id });
  }, [showChatBox]);
  // if (showChatBox == true)
  //   onFetchMessages({ user1: user.userId, user2: userInfor._id });

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
      <Message
        listMessage={listMessage}
        // key={message._id}
        userInfor={userInfor}
      />

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
    onFetchMessages: ({ user1, user2 }) => {
      dispatch(fetchMessages({ user1, user2 }));
    },
  };
}
export default connect(null, mapDispatchtoProps)(ChatBox);
