import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Icon = ({ children }) => {
  return <span className="icon">{ children }</span>;
};

Icon.propTypes = {
  children: PropTypes.node.isRequired
};

export default Icon;