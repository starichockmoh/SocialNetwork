import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

function TableCell({
  value,
  rowValues,
  className,
  renderFn = (displayValue) => displayValue,
}) {
  return (
    <td className={joinClassNames(['table__cell', className])}>
      {renderFn(value, rowValues)}
    </td>
  );
}

TableCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rowValues: PropTypes.instanceOf(Map),
  className: PropTypes.string,
  renderFn: PropTypes.func,
};

TableCell.defaultProps = {
  value: '',
  rowValues: undefined,
  className: undefined,
  renderFn: (value) => value,
};

export default TableCell;
