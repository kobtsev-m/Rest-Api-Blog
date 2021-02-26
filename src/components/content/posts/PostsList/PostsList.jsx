import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postsApi } from 'api/api';
import { setPosts } from 'redux/posts-reducer';
import PostCard from './PostCard';

class PostsList extends Component {
  componentDidMount() {
    postsApi.getPosts().then((posts) => this.props.setPosts(posts));
  }
  render() {
    return (
      <>
        <div className="row">
          <NavLink to="/posts/add" className="btn btn-dark ml-auto">
            Add post
          </NavLink>
        </div>
        <hr className="row my-3" />
        <div className="row">
          {this.props.posts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  setPosts
};

export default connect(null, mapDispatchToProps)(PostsList);
