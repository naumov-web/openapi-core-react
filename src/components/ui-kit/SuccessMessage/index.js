import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const SuccessMessage = ({ text }) => {
  return <div className="success-message">{ text }</div>;
};

SuccessMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default SuccessMessage;