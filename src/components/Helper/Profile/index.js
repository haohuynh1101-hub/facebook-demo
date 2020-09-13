import React from "react";
import PropTypes from "prop-types";
import "./profile.scss";
import ImageProfile from "./../ImageProfile";
Profile.propTypes = {};

function Profile(props) {
  const { img, userName } = props;
  return (
    <div className="profile">
      <img className="image-profile" src={img} />
      <span className="textName">{userName}</span>
    </div>
  );
}

export default Profile;
