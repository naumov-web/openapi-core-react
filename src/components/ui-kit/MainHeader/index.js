import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const MainHeader = ({ text }) => {
  return <h1 className="main-header">{ text }</h1>;
};

MainHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default MainHeader;