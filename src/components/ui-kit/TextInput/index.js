import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const TextInput = ({ name, id, placeholder }) => {
  return (
    <div className="text-input-wrapper">
      <input className="text-input" type="text" name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: ''
};

export default TextInput;