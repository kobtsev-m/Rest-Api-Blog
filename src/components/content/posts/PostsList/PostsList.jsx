import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postsApi } from 'api/api';
import { setPosts } from 'redux/posts-reducer';
import { SpinnerWithText } from 'components/common/loaders/Loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PostCard from './PostCard';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  componentDidMount() {
    this.setState({ loading: true });
    postsApi.getPosts().then(posts => {
      this.props.setPosts(posts);
      this.setState({ loading: false });
    });
  }
  render() {
    return (
      <>
        <div className="row px-3">
          <NavLink
            to="/posts/add"
            className="col-12 col-md-2 btn btn-dark mx-auto mx-md-0 ml-md-auto"
          >
            <span className="mr-2">Add post</span>
            <FontAwesomeIcon icon={faPlus} size="sm" />
          </NavLink>
        </div>
        <hr className="row my-3" />
        <div className="row">
          {!this.state.loading ? (
            this.props.posts.map(post => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-2">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <SpinnerWithText className="col-12 mt-4" />
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  setPosts
};

export default connect(null, mapDispatchToProps)(PostsList);
