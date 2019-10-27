import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const SubHeader = ({ text }) => {
  return <h2 className="sub-header">{ text }</h2>;
};

SubHeader.propTypes = {
  text: PropTypes.string.isRequired
};

export default SubHeader;