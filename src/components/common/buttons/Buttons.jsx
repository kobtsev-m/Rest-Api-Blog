import React from 'react';
import { NavLink } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spinner } from '../loaders/Loaders';

export function BackButton(props) {
  return (
    <NavLink to={props.to} className="btn btn-white border">
      <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
      <span>Back</span>
    </NavLink>
  );
}

export function LoadButton({ variant, className, ...props }) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>
      {props.disabled ? <Spinner /> : props.text}
    </button>
  );
}

export function SubmitButton(props) {
  return (
    <div className="d-flex">
      <LoadButton
        type="submit"
        variant="success"
        className="col-12 col-md-4 ml-md-auto"
        {...props}
      />
    </div>
  );
}
