import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.styl';

const Button = ({ text, style, fullWidth, type }) => {
  const classNames = cn({
    "button": true,
    "button-primary": style === 'primary',
    "button-full-width": fullWidth
  });
  // eslint-disable-next-line react/button-has-type
  return <button className={classNames} type={type}>{ text }</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool
};

Button.defaultProps = {
  style: 'primary',
  fullWidth: false,
  type: 'button'
};

export default Button;