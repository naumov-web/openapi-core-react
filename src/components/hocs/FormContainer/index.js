import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const FormContainer = ({ children }) => {
  return (
    <div className="form-container">
      { children }
    </div>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContainer;