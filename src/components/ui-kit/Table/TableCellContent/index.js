import React from 'react';
import PropTypes from 'prop-types';

const TableCellContent = ({ item, column }) => {
  if (typeof column.name !== 'undefined') {
    return <>{item[column.name]}</>;
  }
  if (typeof column.render === 'function') {
    return <>{column.render({ item, column })}</>;
  }

  return '';
};

TableCellContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  column: PropTypes.object.isRequired,
};

export default TableCellContent;