import './WellKeyValue.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';


function WellKeyValue({ className, term, value }) {
  return (
    <span className={joinClassNames(['well_key_value', className])}>
      <span className="well_key_value__key">{term}</span>
      <span className="well_key_value__value">{value}</span>
    </span>
  );
}

WellKeyValue.propTypes = {
  term: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

WellKeyValue.defaultProps = {
  className: undefined,
};

export default WellKeyValue;
