import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const TableHeadRow = ({ columns }) => {
  return (
    <tr className="table-head-row">
      {columns.map((column) => {
        return (
          <th>
            {column.title}
          </th>
        );
      })}
    </tr>
  );
};

TableHeadRow.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableHeadRow;