import React from 'react';
import PropTypes from 'prop-types';
import Glyph from '../Glyph';
import { joinClassNames } from '../Utils';

function TableHeadCell({
  caption,
  className,
  orderDirection,
  isFilter = false,
  isOrder = false,
  cellTagName = 'th',
  onOrder = () => {},
}) {
  const glyphOrderClasses = { '+': 'order--asc', '-': 'order--desc' };
  const Tag = cellTagName;
  return (
    <Tag className={joinClassNames(['table__header', className])}>
      <div className="table__header_wrapper">
        <button
          type="button"
          className="table__order_button"
          disabled={!isOrder}
          onClick={onOrder}
        >
          {caption}
        </button>
        {orderDirection ? (
          <Glyph
            className={`table__order_glyph ${glyphOrderClasses[orderDirection]}`}
            name="Chevron"
          />
        ) : null}
        {isFilter ? (
          <button type="button" className="table__header_button">
            <Glyph name="Filter" className="table__header_glyph" />
          </button>
        ) : null}
      </div>
    </Tag>
  );
}

TableHeadCell.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  isFilter: PropTypes.bool,
  isOrder: PropTypes.bool,
  orderDirection: PropTypes.string,
  cellTagName: PropTypes.string,
  onOrder: PropTypes.func,
};

TableHeadCell.defaultProps = {
  caption: '',
  className: undefined,
  orderDirection: undefined,
  isFilter: false,
  isOrder: false,
  cellTagName: 'th',
  onOrder: () => {},
};

export default TableHeadCell;
