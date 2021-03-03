import React, { Component } from 'react';
import BackgroundImageOnLoad from 'background-image-on-load';
import { Spinner } from '../loaders/Loaders';

class LoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  handleLoad = () => {
    this.setState({ loaded: true });
  };
  render() {
    return (
      <div
        style={{
          height: this.props.height || '14em',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${this.props.src})`
        }}
      >
        <BackgroundImageOnLoad
          src={this.props.src}
          onLoadBg={this.handleLoad}
        />
        {!this.state.loaded && <Spinner variant="text-white" />}
      </div>
    );
  }
}

export default LoadImage;
