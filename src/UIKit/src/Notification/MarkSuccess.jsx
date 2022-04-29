import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function MarkSuccess({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={joinClassNames(['mark mark--success', className])}
      fill="none"
      viewBox="0 0 40 40"
    >
      <circle cx="20" cy="20" r="19" stroke="#61BC87" strokeWidth="2" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M29 15L18 26l-5-5"
      />
    </svg>
  );
}

MarkSuccess.propTypes = {
  className: PropTypes.string,
};

MarkSuccess.defaultProps = {
  className: undefined,
};

export default MarkSuccess;
