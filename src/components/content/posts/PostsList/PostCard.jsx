import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
// Posts Api
import { postsApi } from 'api/api';
// AC
import { deletePost } from 'redux/posts-reducer';
// Assets
import postEmpty from 'assets/img/postEmpty.jpg';
// Common
import { LoadButton } from 'components/common/buttons/Buttons';
import LoadImage from 'components/common/images/LoadImage';

const mapDispatchToProps = {
  deletePost
};

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = { deleting: false };
  }
  onDelete = () => {
    this.setState({ deleting: true });
    postsApi.deletePost(this.props.id).then(() => {
      this.props.deletePost(this.props.id);
      this.setState({ deleting: false });
    });
  };
  render() {
    return (
      <div className="card mb-2">
        <div className="card-img-top">
          {this.props.images.length === 0 ? (
            <LoadImage src={postEmpty} />
          ) : this.props.images.length === 1 ? (
            <LoadImage src={this.props.images[0].small} />
          ) : (
            <Carousel interval={null}>
              {this.props.images.map((image, i) => (
                <Carousel.Item key={i}>
                  <LoadImage src={image.small} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text text-truncate">{this.props.content}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Owner: {this.props.owner.username}
          </li>
          <li className="list-group-item">
            Categories:{' '}
            {this.props.categories.length ? (
              this.props.categories.map((category, i) =>
                !i ? category.name : `, ${category.name}`
              )
            ) : (
              <span className="text-weight-light text-muted">Empty</span>
            )}
          </li>
        </ul>
        <div className="card-body d-flex">
          <div className="col p-0 pr-1">
            <NavLink
              to={`posts/${this.props.id}`}
              className="btn btn-outline-dark w-100"
            >
              Read...
            </NavLink>
          </div>
          {this.props.postsTotal > 3 && (
            <div className="col p-0 pl-1">
              <LoadButton
                text="Delete"
                variant="outline-danger"
                disabled={this.state.deleting}
                onClick={this.onDelete}
                className="w-100"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PostCard);
