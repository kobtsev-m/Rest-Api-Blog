import { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
// Posts Api
import { postsApi } from 'api/api';
// AC
import { deletePost } from 'redux/posts-reducer';
// Assets
import postEmpty from 'assets/img/postEmpty.jpg';
// Css
import '../Posts.css';

const mapDispatchToProps = {
  deletePost
};

class PostCard extends Component {
  onDelete = () => {
    postsApi.deletePost(this.props.id).then(() => {
      this.props.deletePost(this.props.id);
    });
  };
  render() {
    const categoriesList = this.props.categories.map((category, idx) =>
      !idx ? category.name : `, ${category.name}`
    );
    return (
      <div className="card">
        <div className="card-img-top">
          {this.props.images.length === 0 ? (
            <div
              className="postCard__image"
              style={{ backgroundImage: `url(${postEmpty})` }}
            />
          ) : this.props.images.length === 1 ? (
            <div
              className="postCard__image"
              style={{ backgroundImage: `url(${this.props.images[0].small})` }}
            />
          ) : (
            <Carousel interval={null}>
              {this.props.images.map((image, i) => (
                <Carousel.Item
                  key={i}
                  className="postCard__image"
                  style={{ backgroundImage: `url(${image.small})` }}
                />
              ))}
            </Carousel>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.content}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Owner: {this.props.owner.username}
          </li>
          <li className="list-group-item">Category: {categoriesList}</li>
        </ul>
        <div className="card-body">
          <button onClick={this.onDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(PostCard);
