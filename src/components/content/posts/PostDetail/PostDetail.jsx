import React, { Component } from 'react';
import { postsApi } from 'api/api';
import { BackButton } from 'components/common/buttons/Buttons';
import { SpinnerWithText } from 'components/common/loaders/Loaders';
import LoadImage from 'components/common/images/LoadImage';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { postData: {}, loading: false };
  }
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.setState({ loading: true });
    postsApi
      .getPost(postId)
      .then((postData) => this.setState({ postData, loading: false }));
  }
  render() {
    const lastUpdated = new Date(this.state.postData.updated);
    const lastUpdatedDate = lastUpdated.toLocaleDateString('en-GB');
    const lastUpdatedTime = lastUpdated.toTimeString().slice(0, 8);
    return (
      <>
        <div className="row">
          <BackButton to="/posts" />
        </div>
        <hr className="row" />
        <div className="row card mb-3">
          {!this.state.loading ? (
            <div className="row no-gutters">
              <div className="col-md-4">
                <LoadImage
                  src={
                    this.state.postData.images &&
                    this.state.postData.images[0].large
                  }
                  height={'20em'}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.state.postData.title}</h5>
                  <p className="card-text">{this.state.postData.content}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated {lastUpdatedDate}, {lastUpdatedTime}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <SpinnerWithText className="col-12 py-5" />
          )}
        </div>
      </>
    );
  }
}

export default PostDetail;
