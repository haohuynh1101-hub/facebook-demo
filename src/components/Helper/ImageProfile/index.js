import React from "react";
import PropTypes from "prop-types";

ImageProfile.propTypes = {};

function ImageProfile(props) {
  let { image } = props;
  return <div className="" style={{ backgroundImage: `url(${image})` }}></div>;
}

export default ImageProfile;
