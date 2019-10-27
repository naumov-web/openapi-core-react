import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const PasswordInput = ({ name, id, placeholder }) => {
  const type = 'password';

  return (
    <div className="password-input-wrapper">
      <input className="password-input" type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

PasswordInput.defaultProps = {
  placeholder: ''
};

export default PasswordInput;