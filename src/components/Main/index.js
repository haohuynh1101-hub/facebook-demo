import React from "react";
import PropTypes from "prop-types";
import GroupLeft from "../../containers/GroupLefft";
import PostContainer from "../../containers/PostContainer";
import GroupRight from "../../containers/GroupRight";
import ChatBox from "./../../components/ChatBox";
import "./main.scss";
import ChatBoxMsg from "../ChatBoxMsg";
import Notification from "../Notification";
import BoxStatus from "../BoxStatus";
Main.propTypes = {};

function Main(props) {
  return (
    <div className="main-group">
      <GroupLeft />
      <PostContainer />
      <GroupRight socket={props.socket} />
      <ChatBox />
      <ChatBoxMsg />
      <Notification />
      <BoxStatus />
    </div>
  );
}

export default Main;
