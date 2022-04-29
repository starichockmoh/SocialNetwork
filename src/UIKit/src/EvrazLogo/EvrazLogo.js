import './EvrazLogo.css';

import React from 'react';
import PropTypes from 'prop-types';

import { joinClassNames } from '../Utils';


function EvrazLogo({ className, subheader = '' }) {
  return (
    <div
      className={joinClassNames(['evraz_logo', className])}
      role="img"
      aria-label="Логотип ЕВРАЗ"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 121 20"
        className="evraz_logo__base"
      >
        <defs />
        <path fill="#FCB53B" d="M18.75 0H0v3.85h18.75V0z" />
        <path fill="#F57F29" d="M18.75 7.77H0v3.85h18.75V7.77z" />
        <path fill="#E32213" d="M18.75 15.54H0v3.84h18.75v-3.84z" />
        <path
          fill="#000"
          d="M91.61 3.85l2.96 7.77h-5.92l2.96-7.77zM88.73 0l-7.21 19.38h4.32l1.45-3.92h8.73l1.44 3.85h4.25L94.04 0h-5.31zM26.26 0v19.38h15.41v-3.84H29.98v-3.92h11.69V7.77H29.98V3.85h11.69V0h-15.4zM104.29 19.38h10.17a5.44 5.44 0 005.62-5.72c0-1.5-.53-2.99-2.28-3.93 1.97-1.18 2.28-2.43 2.28-3.92a5.73 5.73 0 00-5.62-5.73h-10.18V4h10.03c.98 0 1.82.87 1.82 1.89s-.84 1.88-1.82 1.88h-8.12v3.85h8.12c.98 0 1.82.86 1.82 1.88s-.84 1.88-1.82 1.88h-10.02v4zM76.36 0H66.03v19.38h3.72v-7.76H76.35a5.7 5.7 0 005.62-5.81A5.7 5.7 0 0076.36 0zm-.16 7.77h-6.45V3.92h6.45c1 0 1.83.87 1.83 1.89 0 1.1-.84 1.96-1.83 1.96zM59.73 9.65c1.98-1.17 2.28-2.43 2.28-3.92A5.73 5.73 0 0056.4 0H46.15v19.38h10.47a5.44 5.44 0 005.62-5.72 4.75 4.75 0 00-2.5-4zm-9.86-5.73h6.3c.98 0 1.82.87 1.82 1.89s-.84 1.88-1.82 1.88H49.87V3.92zm6.53 11.54h-6.53v-3.84h6.53c.98 0 1.82.86 1.82 1.88a1.8 1.8 0 01-1.82 1.96z"
        />
      </svg>
      {subheader ? (
        <div className="evraz_logo__subheader">{subheader}</div>
      ) : null}
    </div>
  );
}

EvrazLogo.propTypes = {
  className: PropTypes.string,
  subheader: PropTypes.string,
};

EvrazLogo.defaultProps = {
  className: undefined,
  subheader: undefined,
};

export default EvrazLogo;
