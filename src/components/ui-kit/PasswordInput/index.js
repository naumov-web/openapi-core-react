import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.styl';
import EyeIcon from '../../../public/images/eye.svg';
import SmallIconButton from '../SmallIconButton';

const PasswordInput = ({ name, id, placeholder }) => {
  const [type, setType] = useState('password');

  const onChangeType = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <div className="password-input-wrapper">
      <input className="password-input" type={type} name={name} id={id} placeholder={placeholder} />
      <SmallIconButton onClick={onChangeType}><EyeIcon /></SmallIconButton>
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