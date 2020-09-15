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
import {
  requestListUserChatted,
  requestListUser,
} from "../../redux/actions/userAction";

Main.propTypes = {};

function Main(props) {
  const { onGetListUserChatted, onGetListUser } = props;
  const { userInfor } = useSelector((state) => state.login);
  const usersChatted = useSelector((state) => state.user.listUserChatted);
  const users = useSelector((state) => state.user.listUser);
  useEffect(() => {
    onGetListUser();
    onGetListUserChatted(userInfor._id);
  }, []);
  return (
    <div className="main-group">
      <GroupLeft />
      <PostContainer />
      <GroupRight socket={props.socket} users={users} />
      <ChatBox />
      <ChatBoxMsg
        usersChatted={usersChatted}
        key={usersChatted._id}
        userInfor={userInfor}
      />
      <Notification />
    </div>
  );
}
function mapDispatchtoProps(dispatch) {
  return {
    onGetListUserChatted: (userId) => {
      dispatch(requestListUserChatted(userId));
    },
    onGetListUser: () => {
      dispatch(requestListUser());
    },
  };
}
export default connect(null, mapDispatchtoProps)(Main);
