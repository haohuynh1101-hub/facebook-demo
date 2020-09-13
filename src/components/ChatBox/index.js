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
import User from "../../components/Helper/Users";
import { hideChatBox } from "./../../redux/actions/uiAction";
import { useSelector, connect } from "react-redux";
import Picker from "emoji-picker-react";

ChatBox.propTypes = {};

function ChatBox(props) {
  const { onHideChatBox } = props;
  const showChatBox = useSelector((state) => state.loading.showChatBox);
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
        <User
          nameUser="Trinh Trinh Võ"
          time="Đang hoạt động"
          image="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-1/s320x320/100096207_562516761129633_4855369749699231744_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=7DCeBbskrw4AX9p-kKO&_nc_oc=AQkd5p-pl6jG4Q1W1IfYSz9ecR-NUmSnj9MFel0WXFvjwJWBuqOlPTNlEEXhOnCJ1zREMi0vzYPQ2yLgUkI08-G6&_nc_ht=scontent.fsgn2-1.fna&tp=7&oh=1f0a42fbce84c31b12777a94ba0e7670&oe=5F7C7863"
        />
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
