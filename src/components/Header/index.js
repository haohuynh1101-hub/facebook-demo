import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faTv,
  faPlus,
  faBell,
  faCaretDown,
  faUsers,
  faUserFriends,
  faStore,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "./../Helper/Profile";
import { connect, useSelector } from "react-redux";
import {
  showChatBoxHeader,
  hideChatBoxHeader,
  showNotifyHeader,
  hideNotifyHeader,
} from "./../../redux/actions/uiAction";
Header.propTypes = {};

function Header(props) {
  const {
    onShowChatBoxHeader,
    onHideChatBoxHeader,
    onShowNotifyBox,
    onHideNotifyBox,
  } = props;
  const showChatBoxHeader = useSelector(
    (state) => state.loading.showChatBoxHeader
  );
  const showNotifyBox = useSelector((state) => state.loading.showNotifyBox);
  function onOpenChatBoxHeader() {
    if (showChatBoxHeader) {
      onHideChatBoxHeader();
    } else {
      onShowChatBoxHeader();
      onHideNotifyBox();
    }
  }
  function onOpenNotifyBoxHeader() {
    if (showNotifyBox) {
      onHideNotifyBox();
    } else {
      onShowNotifyBox();
      onHideChatBoxHeader();
    }
  }
  return (
    <div className="nav-bar">
      <div className="search-group">
        <FontAwesomeIcon className="iconFacebook" icon={faFacebook} />
        <div className="search-input">
          <FontAwesomeIcon className="search" icon={faSearch} />
          <input type="text" placeholder="Tìm kiếm trên Facebook" />
        </div>
      </div>
      <div className="navbar-main">
        <div className="active icon">
          <div className="icon-center">
            <FontAwesomeIcon icon={faHome} className="icon-home Icon-option" />
            <span>Trang chủ</span>
          </div>
        </div>
        <div className="icon">
          <div className="icon-center">
            <FontAwesomeIcon icon={faUserFriends} className="Icon-option" />
            <span>Bạn bè</span>
          </div>
        </div>
        <div className="icon">
          <div className="icon-center">
            <FontAwesomeIcon icon={faTv} className="Icon-option" />
            <span>Watch</span>
          </div>
        </div>
        <div className="icon">
          <div className="icon-center">
            <FontAwesomeIcon icon={faStore} className="Icon-option" />
            <span>Marketplace</span>
          </div>
        </div>
        <div className="icon">
          <div className="icon-center">
            <FontAwesomeIcon icon={faUsers} className="Icon-option" />
            <span>Nhóm</span>
          </div>
        </div>
      </div>
      <div className="navbar-profile">
        <div>
          <Profile img="https://via.placeholder.com/150" userName="Hao" />
        </div>
        <div className="icon-right">
          <FontAwesomeIcon icon={faPlus} className=" Icon-profile" />
          <span className="tooltiptext">Tạo</span>
        </div>
        <div className="icon-right" onClick={onOpenChatBoxHeader}>
          <span className="alert-number">1</span>

          <FontAwesomeIcon
            icon={faFacebookMessenger}
            className={
              showChatBoxHeader ? "Icon-activeprofile" : "Icon-profile"
            }
          />
          <span className="tooltiptext">Messenger</span>
        </div>
        <div className="icon-right" onClick={onOpenNotifyBoxHeader}>
          <span className="alert-number">1</span>
          <FontAwesomeIcon
            icon={faBell}
            className={showNotifyBox ? "Icon-activeprofile" : "Icon-profile"}
          />
          <span className="tooltiptext">Thông báo</span>
        </div>
        <div className="icon-right">
          <FontAwesomeIcon icon={faCaretDown} className="Icon-profile" />
          <span className="tooltiptext">Tài khoản</span>
        </div>
      </div>
    </div>
  );
}
function mapDispatchtoProps(dispatch, props) {
  return {
    onHideChatBoxHeader: () => {
      dispatch(hideChatBoxHeader());
    },
    onShowChatBoxHeader: () => {
      dispatch(showChatBoxHeader());
    },
    onShowNotifyBox: () => {
      dispatch(showNotifyHeader());
    },
    onHideNotifyBox: () => {
      dispatch(hideNotifyHeader());
    },
  };
}
export default connect(null, mapDispatchtoProps)(Header);
