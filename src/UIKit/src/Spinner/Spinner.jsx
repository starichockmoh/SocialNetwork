
import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

import '../index.css';
import './Spinner.css';

function Spinner({ className }) {
  return (
    <div className={joinClassNames(['spinner', className])}>
      <div className="spinner__spin" />
    </div>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: undefined,
};

export default Spinner;
