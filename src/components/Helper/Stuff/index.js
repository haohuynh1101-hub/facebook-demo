import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./stuff.scss";
function Stuff(props) {
  const { image, text } = props;
  return (
    <div className="stuff">
      <img className="icon-stuff" src={image} />
      <div className="textProfile">{text}</div>
    </div>
  );
}

export default Stuff;
