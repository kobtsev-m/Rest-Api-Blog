import React from 'react';
import { Form } from 'react-bootstrap';
import { capitalize } from 'lodash';

function ImageField({ handleChange, errors, options, isSubmitted, ...props }) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
        </span>
      </div>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id={`${props.name}Input`}
          // {...props}
        />
        <label className="custom-file-label" htmlFor={`${props.name}Input`}>
          Choose file
        </label>
      </div>
    </div>
  );
}

export default ImageField;
