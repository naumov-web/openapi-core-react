import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Animation from '../Animation';
import Icon from '../Icon';

import './styles.styl';
import LoadingIcon from '../../../public/images/loading.svg';

const Button = ({ text, style, fullWidth, type, isLoading }) => {
  const classNames = cn({
    "button": true,
    "button-primary": style === 'primary',
    "button-full-width": fullWidth,
    "button-is-loading": isLoading
  });

  const content = isLoading ? 
    <Icon><Animation type="infinity-rotation"><LoadingIcon /></Animation></Icon> : 
    text ;

  // eslint-disable-next-line react/button-has-type
  return <button className={classNames} type={type}>{ content }</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  style: 'primary',
  fullWidth: false,
  type: 'button',
  isLoading: false
};

export default Button;