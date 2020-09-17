import React from "react";
import PropTypes from "prop-types";
import "./profile.scss";
import Avartar from "../../../assets/images/avartar.jpg";
Profile.propTypes = {};

function Profile(props) {
  const { img, userName } = props;
  return (
    <div className="profile">
      <img className="image-profile" src={Avartar} />
      <span className="textName">{userName}</span>
    </div>
  );
}

export default Profile;
