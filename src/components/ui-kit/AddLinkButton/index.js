import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlusIcon from '../../../public/images/plus.svg';

import './styles.styl';

const AddLinkButton = ({ link, text }) => {
  return (
    <Link className="add-link-button" to={link}>
      <PlusIcon width="20px" height="20px" fill="#fff" />
      { text }
    </Link>
  );
};

AddLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default AddLinkButton;