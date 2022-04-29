import './Selector.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function Selector({
  items,
  selectedItem = {},
  className,
  onChange = () => {},
}) {
  return (
    <select
      className={joinClassNames(['selector', className])}
      onChange={onChange}
      value={selectedItem.value}
    >
      {items.map(({ value, displayValue }) => (
        <option key={value} value={value}>
          {displayValue}
        </option>
      ))}
    </select>
  );
}

Selector.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      displayValue: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
  selectedItem: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onChange: PropTypes.func,
};

Selector.defaultProps = {
  items: [],
  selectedItem: undefined,
  className: undefined,
  onChange: () => {},
};

export default Selector;
