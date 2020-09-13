import React, { useEffect } from "react";
import PropTypes from "prop-types";
import GroupLeft from "../../containers/GroupLefft";
import PostContainer from "../../containers/PostContainer";
import GroupRight from "../../containers/GroupRight";
import ChatBox from "./../../components/ChatBox";
import "./main.scss";
import ChatBoxMsg from "../ChatBoxMsg";
import Notification from "../Notification";
import BoxStatus from "../BoxStatus";
import { connect, useSelector } from "react-redux";
import { requestListUserChatted } from "../../redux/actions/userAction";

Main.propTypes = {};

function Main(props) {
  const { onGetListUserChatted } = props;
  const { userInfor } = useSelector((state) => state.login);
  const usersChatted = useSelector((state) => state.user.listUserChatted);
  useEffect(() => {
    onGetListUserChatted(userInfor._id);
  }, []);
  return (
    <div className="main-group">
      <GroupLeft />
      <PostContainer />
      <GroupRight socket={props.socket} />
      <ChatBox />
      <ChatBoxMsg
        usersChatted={usersChatted}
        key={usersChatted._id}
        userInfor={userInfor}
      />
      <Notification />
      <BoxStatus />
    </div>
  );
}
function mapDispatchtoProps(dispatch) {
  return {
    onGetListUserChatted: (userId) => {
      dispatch(requestListUserChatted(userId));
    },
  };
}
export default connect(null, mapDispatchtoProps)(Main);
