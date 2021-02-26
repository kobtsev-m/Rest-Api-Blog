import { Component } from 'react';
import { connect } from 'react-redux';
// Posts Api
import { postsApi } from 'api/api';
// AC
import { deletePost } from 'redux/posts-reducer';
// React-bootstrap
import { Carousel } from 'react-bootstrap';
// Assets
import postEmpty from 'assets/img/postEmpty.jpg';

const mapDispatchToProps = {
  deletePost
};

class Post extends Component {
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
            <img className="d-block w-100" src={postEmpty} alt="..." />
          ) : this.props.images.length === 1 ? (
            <img
              className="d-block w-100"
              src={this.props.images[0]}
              alt="..."
            />
          ) : (
            <Carousel>
              {this.props.images.map(imageUrl => (
                <Carousel.Item>
                  <img className="d-block w-100" src={imageUrl} alt="..." />
                </Carousel.Item>
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

export default connect(null, mapDispatchToProps)(Post);
