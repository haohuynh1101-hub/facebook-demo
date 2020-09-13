import React from "react";
import PropTypes from "prop-types";
import "./listpost.scss";
import Post from "./../Post";
ListPost.propTypes = {};

function ListPost(props) {
  const { post } = props;
  return (
    <div className="list-post">
      <Post post={post} />
    </div>
  );
}

export default ListPost;
