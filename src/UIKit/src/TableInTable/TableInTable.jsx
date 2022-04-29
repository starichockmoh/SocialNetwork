import './TableInTable.css';

import React from 'react';
import PropTypes from 'prop-types';

import { joinClassNames } from '../Utils';
import TableInTableHeader from './TableInTableHeader';

function TableInTable({ headers, className, children }) {
  return (
    <table className={joinClassNames(['table table_in_table', className])}>
      <TableInTableHeader headers={headers} />
      <tbody>{children}</tbody>
    </table>
  );
}

TableInTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string,
      isFilter: PropTypes.bool,
      cellRenderFn: PropTypes.func,
      filterValueTransformFn: PropTypes.func,
      className: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

TableInTable.defaultProps = {
  className: undefined,
  children: undefined,
};

export default TableInTable;
