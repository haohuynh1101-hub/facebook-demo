import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./postcontainer.scss";
import InfinityScroll from "react-infinite-scroll-component";
import StatusBox from "../../components/StatusBox";
import ListPost from "../../components/ListPost";
import { requestListPost } from "../../redux/actions/postAction";
import { connect, useSelector } from "react-redux";
PostContainer.propTypes = {};

function PostContainer(props) {
  const { onGetListPost } = props;

  const posts = useSelector((state) => state.post.listPost);
  useEffect(() => {
    onGetListPost(posts);
  }, []);
  return (
    <div className="post-container">
      <StatusBox />
      <InfinityScroll
        dataLength={posts.length} //This is important field to render the next data
        next={() => onGetListPost(posts)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {posts.map((post) => (
          <ListPost post={post} key={post._id} />
        ))}
      </InfinityScroll>
    </div>
  );
}
function mapDispatchtoProps(dispatch, props) {
  return {
    onGetListPost: (id) => {
      dispatch(requestListPost(id));
    },
  };
}
export default connect(null, mapDispatchtoProps)(PostContainer);