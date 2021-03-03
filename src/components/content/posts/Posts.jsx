import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PostCreate from './PostCreate/PostCreate';
import PostDetail from './PostDetail/PostDetail';
import PostsList from './PostsList/PostsList';

function Posts(props) {
  return (
    <>
      <div className="row justify-content-center justify-content-md-start">
        <span className="h2 mb-1">Posts</span>
      </div>
      <hr className="row my-3" />
      <Route
        exact
        path="/posts"
        render={() => <PostsList {...props.postsList} />}
      />
      <Route
        exact
        path="/posts/add"
        render={() => <PostCreate {...props.postForm} />}
      />
      <Route exact path="/posts/:postId(\d+)" component={PostDetail} />
    </>
  );
}

const mapStateToProps = state => ({
  postForm: state.postsData.postForm,
  postsList: { posts: state.postsData.posts }
});

export default connect(mapStateToProps)(Posts);
