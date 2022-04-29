import React from 'react';
import PropTypes from 'prop-types';
import { joinClassNames } from '../Utils';
import TableCell from '../Table/TableCell';

function TableInTableRow({
  className,
  data = [],
  headers = [],
  children,
  selected = false,
  onSelect = () => {},
}) {
  return (
    <>
      <tr
        className={joinClassNames([
          'table__row table_in_table__row',
          { 'table_in_table--select': selected },
          className,
        ])}
        onClick={() => onSelect()}
      >
        {headers
          .filter(
            (column) => column.isHidden == null || column.isHidden === false,
          )
          .map((header) => {
            const cell = data.get(header.name);
            return (
              <TableCell
                key={`${header.name}.${cell.value}`}
                value={cell.value}
                className="table_in_table__subhead"
                renderFn={
                  header.cellRenderFn ? header.cellRenderFn : cell.renderFn
                }
              />
            );
          })}
      </tr>
      <tr
        className={joinClassNames([
          'table_in_table__row_content',
          { 'table_in_table--open': selected },
        ])}
      >
        <td className="table_in_table__content" colSpan={headers.length}>
          {selected ? children : null}
        </td>
      </tr>
    </>
  );
}

TableInTableRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.instanceOf(Map),
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
  children: PropTypes.node,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

TableInTableRow.defaultProps = {
  className: undefined,
  data: [],
  children: undefined,
  selected: false,
  onSelect: () => {},
};

export default TableInTableRow;
