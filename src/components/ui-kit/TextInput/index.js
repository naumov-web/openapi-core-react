import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const TextInput = ({ name, id, placeholder, onChange, onBlur }) => {
  return (
    <div className="text-input-wrapper">
      <input 
        className="text-input" 
        onChange={onChange} 
        onBlur={onBlur}
        type="text" 
        name={name} 
        id={id} 
        placeholder={placeholder} 
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

TextInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
};

export default TextInput;