import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function MarkWarning({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 40 35"
      className={joinClassNames(['mark mark--warning', className])}
    >
      <path
        stroke="#FCB53B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 2.7l-15 25a3.5 3.5 0 003 5.4h30a3.5 3.5 0 003-5.3l-15-25a3.5 3.5 0 00-6 0v0z"
      />
      <path
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
        d="M20 11.8V19M20 26.2h0"
      />
    </svg>
  );
}

MarkWarning.propTypes = {
  className: PropTypes.string,
};

MarkWarning.defaultProps = {
  className: undefined,
};

export default MarkWarning;
