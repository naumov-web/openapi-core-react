import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const TextArea = ({ name, id, placeholder, onChange, onBlur, value, rows }) => {
  
  return (
    <div className="text-area-wrapper">
      <textarea 
        className="text-area"
        name={name}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}

TextArea.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  rows: PropTypes.number
};

TextArea.defaultProps = {
  rows: 7,
  value: '',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
};

export default TextArea;