import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.styl';

const PaginationLink = ({ link, text, offset, className, onClick }) => {
  const onClickLink = () => {
    onClick({ offset });
  }

  return (
    <Link 
      className={`pagination-link ${className}`} 
      to={link}
      onClick={onClickLink}
    >{ text }
    </Link>
  );
};

PaginationLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  offset: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PaginationLink;