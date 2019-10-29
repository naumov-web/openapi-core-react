import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.styl';

const Button = ({ text, type, fullWidth }) => {
  const classNames = cn({
    "button": true,
    "button-primary": type === 'primary',
    "button-full-width": fullWidth
  });
  return <button className={classNames} type="button">{ text }</button>;
};

Button.propTypes = {
  text : PropTypes.string.isRequired,
  type : PropTypes.string,
  fullWidth : PropTypes.bool
};

Button.defaultProps = {
  type: 'primary',
  fullWidth: false
};

export default Button;