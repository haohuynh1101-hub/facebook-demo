import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./boxstatus.scss";
import Profile from "../Helper/Profile";
import StatusSupport from "../Helper/StatusSupport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";

import {
  faVideo,
  faPhotoVideo,
  faSmile,
  faTimes,
  faMapMarker,
  faUserTag,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { requestAddPost } from "../../redux/actions/postAction";
import { connect, useSelector } from "react-redux";
BoxStatus.propTypes = {};

function BoxStatus(props) {
  const { onAddPost } = props;
  const showStatusBox = useSelector((state) => state.loading.showStatusBox);
  const [emojiPanel, setEmojiPanel] = useState(false);
  const [content, setContent] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);

  useEffect(() => {
    if (chosenEmoji != null) {
      setContent(content + chosenEmoji.emoji);
    }
  }, [chosenEmoji]);
  function onEmojiClick(event, emojioject) {
    setChosenEmoji(emojioject);
  }

  function handleSubmit(e) {
    e.preventDefault();

    var post = {
      content: content,
      name: "Trinh Trinh Võ",
      userId: "0204",
    };
    onAddPost(post);
    setContent("");
  }
  return (
    <div
      className="overlay"
      style={{ visibility: showStatusBox ? "visible" : "hidden" }}
    >
      <form onSubmit={handleSubmit} className="status-box">
        <div className="title">
          <h3 className="title-create">Tạo bào viết</h3>
          <button type="button">
            <FontAwesomeIcon className="icon-time" icon={faTimes} />
          </button>
        </div>
        <div className="line"></div>
        <Profile img="https://via.placeholder.com/150" userName="Hào Huỳnh" />
        <div className="emoji-group">
          <textarea
            className="fill-status"
            placeholder="Hào ơi,bạn đang nghĩ gì thế?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <FontAwesomeIcon
            className="icon-smile"
            icon={faSmile}
            onClick={() => setEmojiPanel(!emojiPanel)}
          />
          <div
            className="emojiPanel"
            style={{ display: emojiPanel ? "block" : "none" }}
          >
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </div>
        <div className="support">
          <span>Thêm vào bài viết</span>
          <div className="icon-sp">
            <StatusSupport icon={faVideo} />
            <StatusSupport icon={faPhotoVideo} />
            <StatusSupport icon={faUserTag} />
            <StatusSupport icon={faSmile} />
            <StatusSupport icon={faMapMarker} />
            <StatusSupport icon={faEllipsisH} />
          </div>
        </div>
        <button
          type="submit"
          disabled={content === ""}
          className={content === "" ? "btn-postenable" : "btn-post"}
        >
          Đăng
        </button>
      </form>
    </div>
  );
}
function mapDispatchtoprops(dispatch, props) {
  return {
    onAddPost: (post) => {
      dispatch(requestAddPost(post));
    },
  };
}
export default connect(null, mapDispatchtoprops)(BoxStatus);
