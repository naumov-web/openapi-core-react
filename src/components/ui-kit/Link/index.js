import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import PropTypes from 'prop-types';

import './styles.styl';

const Link = ({ link, text }) => {
  return <RouterLink className="router-link" to={link}>{ text }</RouterLink>;
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Link;