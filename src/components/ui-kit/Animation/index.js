import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.styl';

const Animation = ({ children, type }) => {
  // eslint-disable-next-line no-unused-vars
  const typeClass = `animation-${type}`;
  const classnames = cn({
    'animation': true,
    [typeClass]: true
  });

  return <span className={classnames}>{ children }</span>;
};

Animation.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
};

export default Animation;