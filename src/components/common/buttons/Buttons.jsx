import React from 'react';
import { NavLink } from 'react-router-dom';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function BackButton(props) {
  return (
    <NavLink to={props.to} className="btn btn-white border">
      <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
      <span>Back</span>
    </NavLink>
  );
}

export function SubmitButton(props) {
  return (
    <div className="d-flex">
      <button
        type="submit"
        className="btn btn-success col-12 col-md-3 ml-md-auto"
      >
        {props.text}
      </button>
    </div>
  );
}
