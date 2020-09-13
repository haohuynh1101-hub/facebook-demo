import React from "react";
import PropTypes from "prop-types";
import "./notification.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import User from "../Helper/User";
import Profile from "../Helper/Profile";
import { useSelector } from "react-redux";
import UserNotify from "../Helper/UserNotify";
Notification.propTypes = {};

function Notification(props) {
  const showNotifyBox = useSelector((state) => state.loading.showNotifyBox);
  return (
    <div
      style={{ visibility: showNotifyBox ? "visible" : "hidden" }}
      className="notification"
    >
      <div className="right-header">
        <div className="text-msg">Thông báo</div>
        <div>
          <FontAwesomeIcon className="right-icon" icon={faEllipsisH} />
        </div>
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
      <div className="notification-main">
        <UserNotify
          img="https://via.placeholder.com/150"
          userName="Hao Huynh"
          textNotify="đã bày tỏ cảm xúc về bình luận của bạn"
          time="3 ngày trước"
        />
      </div>
    </div>
  );
}

export default Notification;
