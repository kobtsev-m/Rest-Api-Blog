import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PostForm from './PostCreate/PostCreate';
import PostsList from './PostsList/PostsList';

function Posts(props) {
  return (
    <>
      <div className="row">
        <span className="h2 mb-1">Posts</span>
      </div>
      <hr className="row my-3" />
      <Route
        exact
        path="/posts/add"
        render={() => <PostForm {...props.postForm} />}
      />
      <Route
        exact
        path="/posts"
        render={() => <PostsList {...props.postsList} />}
      />
    </>
  );
}

const mapStateToProps = state => ({
  postForm: state.postsData.postForm,
  postsList: { posts: state.postsData.posts }
});

export default connect(mapStateToProps)(Posts);
