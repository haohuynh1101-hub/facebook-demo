import React, { useState } from "react";
import PropTypes from "prop-types";
import "./post.scss";
import Stuff from "../Helper/Stuff";
import Users from "../Helper/Users";
import {
  faGlobeAsia,
  faEllipsisH,
  faThumbsUp,
  faHeart,
  faSmile,
  faGrinSquint,
  faLaugh,
  faCommentAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusSupport from "./../Helper/StatusSupport";
Post.propTypes = {};

function Post(props) {
  const { post } = props;
  const [liked, setLiked] = useState(false);
  function showResultLike() {
    var like = 100;
    if (liked) {
      like = like + 1;
    }
    return like;
  }
  return (
    <div className="post-box">
      <div className="post-header">
        <Users
          image="https://via.placeholder.com/150"
          nameUser="Hào Huỳnh"
          time="3 giờ"
          icon={faGlobeAsia}
        />
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
      <div className="post-main">
        <span>{post.content}</span>
      </div>
      <div className="post-support">
        <div>
          <FontAwesomeIcon className="like" icon={faThumbsUp} />
          <FontAwesomeIcon className="heart" icon={faHeart} />
          <FontAwesomeIcon className="haha" icon={faLaugh} />
          <span>{showResultLike()}</span>
        </div>
        <div className="comment">
          <span>6 comments</span>
          <span>12 shares</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="post-footer">
        <div
          className="status"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          <FontAwesomeIcon
            className={liked ? "active-btnLike" : "btn-like"}
            icon={faThumbsUp}
          />
          <span className={liked ? "active-textlike" : "text-like"}>Like</span>
        </div>
        <StatusSupport icon={faCommentAlt} text="Comment" />
        <StatusSupport icon={faShare} text="Share" />
      </div>
    </div>
  );
}

export default Post;
