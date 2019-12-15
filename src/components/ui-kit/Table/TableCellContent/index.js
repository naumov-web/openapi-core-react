import PropTypes from 'prop-types';

const TableCellContent = ({ item, column }) => {
  if (typeof column.name !== 'undefined') {
    return item[column.name];
  }
  if (typeof column.render !== 'function') {
    return column.render({ item, column });
  }

  return null;
};

TableCellContent.propTypes = {
  item: PropTypes.obj.isRequired,
  column: PropTypes.obj.isRequired,
};

export default TableCellContent;