import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Profile from "../Helper/Profile";
import StatusSupport from "../Helper/StatusSupport";

import {
  faVideo,
  faPhotoVideo,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import "./statusbox.scss";
import { showStatusBox } from "../../redux/actions/uiAction";
import { connect } from "react-redux";
StatusBox.propTypes = {};

function StatusBox(props) {
  const { onOpenStatusBox } = props;

  const [emojiPanel, setEmojiPanel] = useState(false);
  const [content, setContent] = useState("");
  const [showStatusBox, setShowStatusBox] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  useEffect(() => {
    if (chosenEmoji != null) {
      setContent(content + chosenEmoji.emoji);
    }
  }, [chosenEmoji]);

  return (
    <Fragment>
      <div className="pre-post">
        <div className="profile-group">
          <Profile img="https://via.placeholder.com/150" />
          <input
            value={content}
            onClick={onOpenStatusBox}
            placeholder="Hào ơi, bạn đang nghĩ gì thế?"
          />
        </div>
        <div className="status-group">
          <StatusSupport
            className="video"
            icon={faVideo}
            text="Video trực tiếp"
          />
          <StatusSupport
            className="photo"
            icon={faPhotoVideo}
            text="Ảnh/Video"
          />
          <StatusSupport
            className="smile"
            icon={faSmile}
            text="Cảm xúc/Hoạt động"
          />
        </div>
      </div>
    </Fragment>
  );
}
function mapDispatchtoprops(dispatch, props) {
  return {
    onOpenStatusBox: () => {
      dispatch(showStatusBox());
    },
  };
}

export default connect(null, mapDispatchtoprops)(StatusBox);
