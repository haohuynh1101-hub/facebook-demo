import React from "react";
import PropTypes from "prop-types";
import "./globalloading.scss";
import Loadingicon from "../../assets/images/loading.gif";
import { connect, useSelector } from "react-redux";
GlobalLoading.propTypes = {};

function GlobalLoading(props) {
  const loading = useSelector((state) => state.loading.showLoading);
  let xhtml = null;
  if (loading) {
    xhtml = (
      <div className="loading">
        <img src={Loadingicon} alt="loading" />
      </div>
    );
  }
  return xhtml;
}
function mapDispatchtoProps(dispatch, props) {}
export default connect(null, mapDispatchtoProps)(GlobalLoading);
