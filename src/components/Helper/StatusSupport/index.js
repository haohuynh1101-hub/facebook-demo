import React from "react";
import PropTypes from "prop-types";
import "./statussupport.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

StatusSupport.propTypes = {};

function StatusSupport(props) {
  const { icon, text } = props;
  return (
    <div className="status">
      <FontAwesomeIcon className="icon-support" icon={icon} />
      <div className="textProfile">{text}</div>
    </div>
  );
}

export default StatusSupport;
