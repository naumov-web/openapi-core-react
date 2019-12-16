import React from 'react';
import PropTypes from 'prop-types';
import TableCellContent from '../TableCellContent';

const TableBodyRows = ({ items, columns }) => {
  return items.map((item) => {
    return (
      <tr>
        {columns.map(column => {
          return (
            <td>
              <TableCellContent item={item} column={column} />
            </td>
          );
        })}
      </tr>
    );
  });
};

TableBodyRows.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TableBodyRows;