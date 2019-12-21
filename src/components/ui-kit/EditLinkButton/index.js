import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import EditIcon from '../../../public/images/edit.svg';

import './styles.styl';

const EditLinkButton = ({ link, text }) => {
  return (
    <Link className="edit-link-button" to={link}>
      <EditIcon width="20px" height="20px" fill="#fff" />
      { text }
    </Link>
  );
};

EditLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default EditLinkButton;