import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Animation from '../Animation';

import './styles.styl';
import LoadingIcon from '../../../public/images/loading.svg';

const Button = ({ text, style, fullWidth, type, isLoading, widthStyle }) => {
  const classNames = cn({
    "button": true,
    "button-primary": style === 'primary',
    "button-width-narrow": widthStyle === 'narrow',
    "button-full-width": fullWidth,
    "button-is-loading": isLoading
  });

  const content = isLoading ? 
    (
      <Animation type="infinity-rotation" width="20px" height="20px">
        <LoadingIcon width="20px" height="20px" fill="#fff" />
      </Animation>
    ) : 
    text ;

  // eslint-disable-next-line react/button-has-type
  return <button className={classNames} type={type}>{ content }</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  type: PropTypes.string,
  widthStyle: PropTypes.string,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool
};

Button.defaultProps = {
  style: 'primary',
  fullWidth: false,
  widthStyle: 'narrow',
  type: 'button',
  isLoading: false
};

export default Button;