import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ children }) => {
  return (
    <thead className="thead">
      {children}
    </thead>
  );
};

TableHead.propTypes = {
  children: PropTypes.node.isRequired
};

export default TableHead;