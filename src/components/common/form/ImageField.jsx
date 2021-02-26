import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
  handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ dragging: true });
    }
  };
  handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ dragging: false });
    }
  };
  handleDrop = (e) => {
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
  handleChange = (files) => {
    if ([...files].some((file) => !file.name.match(/.(jpg|jpeg|png|gif)$/i))) {
      return;
    }
    this.setState({
      images: [...this.state.images, ...files],
      imagesUrls: [
        ...this.state.imagesUrls,
        ...[...files].map((file) => URL.createObjectURL(file))
      ]
    });
    this.props.handleChange({
      [this.props.name]: [...this.state.images, ...files]
    });
  };
  handleDelete = (idx) => {
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
      <div className="mb-3">
        <div className="imageField border rounded p-3 mb-2" ref={this.dropRef}>
          {this.state.dragging && (
            <div className="imageField__hover">
              <span className="imageField__hover__label h4">
                {this.props.label}
              </span>
            </div>
          )}
          <div className="d-flex">
            {this.state.imagesUrls.map((imageUrl, i) => (
              <div
                key={i}
                id={'imgDrag' + i}
                className="imageField__image mr-2"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => this.handleDelete(i)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <input
          type="file"
          multiple={true}
          className="d-none"
          id="imageFieldInput"
          onChange={(e) => this.handleChange(e.target.files)}
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
