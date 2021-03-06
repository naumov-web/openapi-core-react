/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const Select = ({ name, id, placeholder, onChange, onBlur, value, options }) => {
  
  return (
    <div className="select-wrapper">
      <select
        className="select"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={value}
      >
        <option value="" />
        {options.map(
          // eslint-disable-next-line no-shadow
          ({ id, name }) => <option value={id}>{ name }</option>
        )}
      </select>
    </div>
  );
};

export default Select;