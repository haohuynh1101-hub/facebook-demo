import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./groupleft.scss";
import Profile from "../../components/Helper/Profile";
import Stuff from "../../components/Helper/Stuff";

GroupLeft.propTypes = {};

function GroupLeft(props) {
  return (
    <Fragment>
      <div className="left-group  ">
        <div className="scroll">
          <Profile userName="Hào Huỳnh" img="https://via.placeholder.com/150" />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            text="Tìm kiếm bạn bè"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            text="Nhóm"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            text="Marketplace"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            text="Video"
          />
          <div className="line"></div>
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            text="Tìm kiếm bạn bè"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            text="Nhóm"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            text="Marketplace"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            text="Video"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
            text="Tìm kiếm bạn bè"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
            text="Nhóm"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
            text="Marketplace"
          />
          <Stuff
            image="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
            text="Video"
          />
        </div>
        {/* <div className="scroll">
          
        </div> */}
      </div>
    </Fragment>
  );
}

export default GroupLeft;
