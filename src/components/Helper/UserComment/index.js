import React from "react";
import PropTypes from "prop-types";
import "./usercomment.scss";
UserComment.propTypes = {};

function UserComment(props) {
  const { img, userName, comment } = props;
  return (
    <div className="user-comment">
      <img className="image-usercomment" src={img} />
      <div>
        <div className="group-comment">
          <span className="name-comment">{userName}</span>
          <div>
            <span className="text-comment">{comment}</span>
          </div>
        </div>
        <div className="status-replycomment">
          <span>Thích</span>
          <span>Trả lời</span>
          <span style={{ color: "#90949c" }}>1 giờ</span>
        </div>
      </div>
    </div>
  );
}

export default UserComment;
