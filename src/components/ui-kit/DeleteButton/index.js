import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '../../../public/images/delete.svg';

import './styles.styl';

const DeleteButton = ({ text, onClick }) => {
  return (
    <button type="button" className="delete-button" onClick={onClick}>
      <DeleteIcon width="20px" height="20px" fill="#fff" />
      { text }
    </button>
  );
};

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

DeleteButton.defaultProps = {
  onClick: () => {}
};

export default DeleteButton;