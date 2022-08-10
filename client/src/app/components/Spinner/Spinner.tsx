import React from 'react';
import './Spinner.scss';

export const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-dot"></div>
      <div className="spinner-dot"></div>
      <div className="spinner-dot"></div>
      <div className="spinner-dot"></div>
      <div className="spinner-dot"></div>
      <div className="spinner-dot"></div>
    </div>
  );
};
