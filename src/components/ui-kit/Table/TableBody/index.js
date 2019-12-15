import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ children }) => {
  return (
    <tbody className="tbody">
      {children}
    </tbody>
  );
};

TableBody.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableBody;