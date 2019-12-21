/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
// Components
import SortLink from './SortLink';

import './styles.styl';

const TableHeadRow = ({ columns, sort_by, sort_direction, onChangeSorting }) => {
  return (
    <tr className="table-head-row">
      {columns.map((column) => {

        return (
          <th>
            {column.title}
            {column.sorting && (
              <SortLink 
                is_active={column.name === sort_by}
                column={column.name}
                current_column={sort_by}
                current_direction={sort_direction}
                onClick={onChangeSorting}
              />
            )}
          </th>
        );
      })}
    </tr>
  );
};

TableHeadRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort_by: PropTypes.string.isRequired,
  sort_direction: PropTypes.string.isRequired,
  onChangeSorting: PropTypes.func.isRequired
};

export default TableHeadRow;