import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Field.css';

class ImageField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imagesUrls: [],
      dragging: false
    };
    this.dropRef = React.createRef();
    this.dragCounter = 0;
  }
  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };
  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ dragging: false });
    }
  };
  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ dragging: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.handleChange(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };
  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }
  handleChange = files => {
    if ([...files].some(file => !file.name.match(/.(jpg|jpeg|png|svg)$/i))) {
      return;
    }
    const newImgsList = [...this.state.images, ...files];
    const newImgsUrls = [
      ...this.state.imagesUrls,
      ...[...files].map(file => URL.createObjectURL(file))
    ];
    this.setState({
      images: newImgsList,
      imagesUrls: newImgsUrls
    });
    this.props.handleChange({
      [this.props.name]: newImgsList
    });
  };
  handleDelete = idx => {
    const newImgsList = this.state.images.filter((_, i) => i !== idx);
    const newUrlsList = this.state.imagesUrls.filter((_, i) => i !== idx);
    this.setState({
      images: newImgsList,
      imagesUrls: newUrlsList
    });
    this.props.handleChange({
      [this.props.name]: newImgsList
    });
  };
  render() {
    return (
      <div className="form-group mb-2">
        <label>Post Images</label>
        <div className="imageField border rounded p-3 mb-2" ref={this.dropRef}>
          {this.state.dragging && <div className="imageField__hover"></div>}
          <div className="d-flex">
            {this.state.imagesUrls.length ? (
              this.state.imagesUrls.map((imageUrl, i) => (
                <div
                  key={i}
                  className="imageField__image mr-2"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-danger m-1"
                    onClick={() => this.handleDelete(i)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              ))
            ) : (
              <div className="imageField__image w-100 d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faCloudUploadAlt} className="h1 m-0" />
                <div className="d-flex flex-column align-items-center ml-3">
                  <span className="h4 text-muted mb-0">Upload images</span>
                  <small className="form-text text-muted">
                    Formats: Jpg, Jpeg, Png, Svg
                  </small>
                </div>
              </div>
            )}
          </div>
        </div>
        <input
          type="file"
          multiple={true}
          className="d-none"
          id="imageFieldInput"
          onChange={e => this.handleChange(e.target.files)}
        />
        <label
          htmlFor="imageFieldInput"
          className="btn btn-white border w-100"
        >
          Browse
        </label>
      </div>
    );
  }
}

export default ImageField;
