import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';
import TableHeadCell from '../Table/TableHeadCell';

function toggleOrder(direction) {
  const sign = Number(`${direction}1`) * -1;
  return sign < 0 ? '-' : '+';
}

function TableInTableHeader({
  headers,
  orderedColumn,
  className,
  onOrder = () => {},
}) {
  const orderColumn = orderedColumn.substr(1);
  const orderDirection = orderedColumn.substr(0, 1);
  return (
    <thead className={joinClassNames(['table_in_table__header', className])}>
      <tr>
        {headers
          .filter(
            (column) => column.isHidden == null || column.isHidden === false,
          )
          .map((headCell) => (
            <TableHeadCell
              key={headCell.name}
              name={headCell.name}
              caption={headCell.displayName}
              isFilter={headCell.isFilter}
              isOrder={headCell.isOrder}
              orderDirection={
                orderColumn === headCell.name ? orderDirection : null
              }
              filterValueTransformFn={headCell.filterValueTransformFn}
              className={joinClassNames([
                headCell.className,
                'table_in_table__cell',
              ])}
              onOrder={() =>
                onOrder(`${toggleOrder(orderDirection)}${headCell.name}`)
              }
            />
          ))}
      </tr>
    </thead>
  );
}

TableInTableHeader.propTypes = {
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
  orderedColumn: PropTypes.string,
  className: PropTypes.string,
  onOrder: PropTypes.func,
};

TableInTableHeader.defaultProps = {
  orderedColumn: '+id',
  className: undefined,
  onOrder: () => {},
};

export default TableInTableHeader;
