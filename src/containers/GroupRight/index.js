import React, { Profiler, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./groupright.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import Profile from "../../components/Helper/Profile";
import { connect, useSelector } from "react-redux";
import { showChatBox } from "./../../redux/actions/uiAction";
import { requestListUser } from "./../../redux/actions//userAction";
import User from "../../components/Helper/User";
GroupRight.propTypes = {};

function GroupRight(props) {
  const { socket } = props;
  const { userInfor } = useSelector((state) => state.login);

  const { onShowChatBox, onGetListUser } = props;
  const users = useSelector((state) => state.user.listUser);
  const [online, setOnline] = useState(false);
  socket.on("user online", () => {
    setOnline(!online);
  });
  useEffect(() => {
    onGetListUser();
    return () => {};
  }, [online]);
  return (
    <div className="right-group">
      <div className="line"></div>
      <div className="right-header">
        <div className="text-contact">Người liên hệ</div>
        <div>
          <FontAwesomeIcon className="right-icon" icon={faVideo} />
          <FontAwesomeIcon className="right-icon" icon={faSearch} />
          <FontAwesomeIcon className="right-icon" icon={faEllipsisH} />
        </div>
      </div>
      <div className="user-box" onClick={onShowChatBox}>
        {users.map((user) => {
          if (user.userId != userInfor._id)
            return (
              <User
                userId={user.userId}
                name={user.name}
                status={user.status}
              />
            );
        })}
      </div>
    </div>
  );
}
function mapDispatchtoProps(dispatch, props) {
  return {
    onShowChatBox: () => {
      dispatch(showChatBox());
    },
    onGetListUser: () => {
      dispatch(requestListUser());
    },
  };
}
export default connect(null, mapDispatchtoProps)(GroupRight);
