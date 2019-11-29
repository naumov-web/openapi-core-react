import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './styles.styl';

const Animation = ({ children, type, width, height }) => {
  // eslint-disable-next-line no-unused-vars
  const typeClass = `animation-${type}`;
  const classnames = cn({
    'animation': true,
    [typeClass]: true
  });

  const styles = {
    width,
    height
  };

  return <span style={styles} className={classnames}>{ children }</span>;
};

Animation.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

Animation.defaultProps = {
  width: null,
  height: null
};

export default Animation;