import React from 'react';
import PropTypes from 'prop-types';

import './styles.styl';

const SmallIconButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="small-icon-button" type="button">
      {children}
    </button>
  );
}

SmallIconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SmallIconButton;