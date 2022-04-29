import './Table.css';

import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';

import TableHeadCell from './TableHeadCell';
import TableCell from './TableCell';
import { hasTotalFn } from './utils';

function toggleOrder(direction) {
  const sign = Number(`${direction}1`) * -1;
  return sign < 0 ? '-' : '+';
}

function isNotHiddenColumn(columnData) {
  return columnData.isHidden == null || columnData.isHidden === false;
}

function Table({
  primaryKey,
  header = [],
  data = [],
  orderedColumn = '+id',
  className,
  onOrder = () => {},
  hideHeader = false,
}) {
  const orderColumn = orderedColumn.substr(1);
  const orderDirection = orderedColumn.substr(0, 1);

  const filteredHeader = header.filter(isNotHiddenColumn);

  return (
    <table className={joinClassNames(['table', className])}>
      {!hideHeader ? (
        <thead className={hideHeader ? 'table--hide-head' : null}>
          <tr>
            {filteredHeader.map((headCell) => (
              <TableHeadCell
                key={`head.${headCell.name}`}
                name={headCell.name}
                caption={headCell.displayName}
                isFilter={headCell.isFilter}
                isOrder={headCell.isOrder}
                orderDirection={
                  orderColumn === headCell.name ? orderDirection : null
                }
                filterValueTransformFn={headCell.filterValueTransformFn}
                columnData={data.map((dataRow) => {
                  return dataRow.get(headCell.name);
                })}
                className={headCell.className}
                onOrder={() =>
                  onOrder(`${toggleOrder(orderDirection)}${headCell.name}`)
                }
              />
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {data.map((row, rowIndex) => {
          const rowKey = row.get(primaryKey)
            ? row.get(primaryKey).value
            : rowIndex;
          return (
            <tr key={rowKey} className="table__row">
              {filteredHeader.map((column) => {
                const cell = row.get(column.name);
                return (
                  <TableCell
                    key={`${rowKey}.${column.name}.${cell.value}`}
                    value={cell.value}
                    renderFn={
                      cell.cellRenderFn
                        ? cell.cellRenderFn
                        : column.cellRenderFn
                    }
                    className={cell.className}
                    rowValues={
                      new Map(
                        [...row].map(([key, valueObject]) => [
                          key,
                          valueObject.value,
                        ]),
                      )
                    }
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
      {hasTotalFn(filteredHeader) ? (
        <tfoot>
          <tr className="table__footer">
            {filteredHeader.map((headerColumn) => (
              <td key={headerColumn.name} className="table__cell_foot">
                {headerColumn.totalFn != null
                  ? headerColumn.totalFn(
                      data.map((dataRow) => {
                        return dataRow.get(headerColumn.name);
                      }),
                    )
                  : null}
              </td>
            ))}
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
}

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      displayName: PropTypes.string,
      isFilter: PropTypes.bool,
      cellRenderFn: PropTypes.func,
      filterValueTransformFn: PropTypes.func,
      className: PropTypes.string,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.instanceOf(Map)),
  primaryKey: PropTypes.string,
  orderedColumn: PropTypes.string,
  className: PropTypes.string,
  onOrder: PropTypes.func,
  hideHeader: PropTypes.bool,
};

Table.defaultProps = {
  data: [],
  primaryKey: 'id',
  orderedColumn: '+id',
  className: undefined,
  hideHeader: false,
  onOrder: () => {},
};

export default Table;
