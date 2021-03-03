import React from 'react';

export function SpinnerWithText(props) {
  return (
    <div
      className={`d-flex align-items-center justify-content-center ${props.className}`}
    >
      <div className="spinner-border" />
      <span className="h5 text-muted m-0 ml-2">Loading...</span>
    </div>
  );
}

export function Spinner(props) {
  return (
    <div
      className={`d-flex align-items-center justify-content-center h-100 ${props.className}`}
    >
      <div
        className={`spinner-border spinner-border-sm my-1 ${props.variant}`}
      />
    </div>
  );
}
