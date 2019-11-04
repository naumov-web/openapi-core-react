import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const FieldError = ({ text }) => <div className="field-error">{ text }</div>;

FieldError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FieldError;