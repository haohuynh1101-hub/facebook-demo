import React from "react";
import "./loadingicon.scss";
import Loading from "../../assets/images/loading-icon.gif";
function LoadingIcon(props) {
  return (
    <div className="loading-icon">
      <img src={Loading} alt="loading" />
    </div>
  );
}

export default LoadingIcon;
