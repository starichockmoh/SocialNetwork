import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function MarkError({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={joinClassNames(['mark mark--error', className])}
      fill="none"
      viewBox="0 0 38 38"
    >
      <path
        stroke="#E32213"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.5 1h15L37 11.5v15L26.5 37h-15L1 26.5v-15L11.5 1z"
      />
      <path
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
        d="M19 11.8V19M19 26.2h0"
      />
    </svg>
  );
}

MarkError.propTypes = {
  className: PropTypes.string,
};

MarkError.defaultProps = {
  className: undefined,
};

export default MarkError;
