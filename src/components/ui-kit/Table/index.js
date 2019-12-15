import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.styl';

const Table = ({ children, fullWidth }) => {
  const classnames = cn({
    "table": true,
    "table-full-width": fullWidth
  });

  return (
    <table className={classnames}>
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool
};

Table.defaultProps = {
  fullWidth: false
};

export default Table;